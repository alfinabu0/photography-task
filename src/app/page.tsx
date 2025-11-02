"use client";
import React, { useCallback, useState, useMemo } from "react";
import { Accept, DropzoneOptions, useDropzone } from "react-dropzone";
import { PRICE_TABLE } from "../utils/constants";
import { PhotoItem } from "../utils/types";
import { HiTrash } from "react-icons/hi2";

// Define size options and prices (AED)

const Upload: React.FC = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);

  // Handle file drop
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newPhotos = acceptedFiles
        .slice(0, 5 - photos.length) // limit total to 5
        .map((file) => ({ file, size: "4x6" as const })); // default size
      setPhotos((prev) => [...prev, ...newPhotos]);
    },
    [photos]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 5
    
  }  as unknown as DropzoneOptions);

  // Calculate total dynamically
  const totalPrice = useMemo(
    () => photos.reduce((sum, p) => sum + PRICE_TABLE[p.size], 0),
    [photos]
  );

  // Handle size change
  const handleSizeChange = (index: number, newSize: string) => {
    const updated = [...photos];
    updated[index].size = newSize as keyof typeof PRICE_TABLE;
    setPhotos(updated);
  };

  //handle remove photo
  const handleRemovePhoto = (index: number) => {
    const updated = [...photos];
    updated.splice(index, 1);
    setPhotos(updated);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto p-5">
      {/* Upload zone */}
      <div
        className={
          "flex flex-col items-center justify-center w-full p-6 border-2 rounded-xl border-gray-300 cursor-pointer border-dashed " +
          (isDragActive ? " bg-gray-100" : "")
        }
        {...getRootProps()}
      >
        <input {...(getInputProps() as any)} />
        {isDragActive ? (
          <p className="text-gray-500">Drop your photos here...</p>
        ) : (
          <p className="text-gray-500 text-center">
            Drag & drop up to 5 photos, or click to select files
          </p>
        )}
      </div>

      {/* Previews */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6 w-full">
        {photos.map((photo, index) => (
          <div
            key={`${photo.file.name}-${photo.file.lastModified}`}
            className="flex flex-col items-center space-y-2 border rounded-lg p-2 shadow-sm"
          >
            <img
              src={URL.createObjectURL(photo.file)}
              alt={`upload-preview-${index}`}
              className="object-cover h-48 w-48 rounded-lg"
            />

            {/* Size dropdown */}

            <select
              aria-label={`Select size for photo ${index + 1}`}
              className="border rounded-md px-2 py-1 text-sm"
              value={photo.size}
              onChange={(e) => handleSizeChange(index, e.target.value)}
            >
              {Object.keys(PRICE_TABLE).map((size) => (
                <option key={size} value={size}>
                  {size} – AED {PRICE_TABLE[size]}
                </option>
              ))}
            </select>
            <div className="w-full"></div>
            <button
              aria-label={`Remove photo ${index + 1}`}
              className="outline-none border rounded-md px-2 py-1 text-sm"
              onClick={() => handleRemovePhoto(index)}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <HiTrash />
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Total Price */}
      {photos.length > 0 && (
        <div className="mt-6 w-full text-center border-t pt-4">
          <p className="text-lg font-semibold">
            Total Price: AED {totalPrice.toFixed(2)}
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => alert("Payment simulated")}
          >
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Upload;
