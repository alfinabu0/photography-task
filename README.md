# 🖼️ Photo Printing Web App

A minimalistic **photo printing** web page built with **Next.js**, **React Dropzone**, and **Next Themes**.  
Users can upload photos, select print sizes, and view the total price automatically — all within a fast and responsive UI.

---

## 🚀 Tech Stack

- **Next.js 14** – Framework for hybrid rendering, routing, and high performance  
- **React Dropzone** – For smooth drag-and-drop photo uploads  
- **TypeScript** – Type-safe and maintainable code  
- **Next Themes** – Handles dark/light mode and theme scaling  
- **Tailwind CSS** – Clean, utility-first styling  

---

## 💡 Features

- 📸 **Drag & Drop Uploads:** Upload multiple photos easily using React Dropzone  
- 🧩 **Dynamic Size Selection:** Each uploaded photo includes a dropdown to select print size  
- 💰 **Auto Price Calculation:** Total price updates automatically when print sizes change  
- 🗑️ **Photo Deletion:** Remove any uploaded image with a single click  
- 🌗 **Dark / Light Mode:** Built with Next Themes for accessibility and user preference while mainitaining a non flickering UI
- ⚡ **Performance Optimizations:**
  - `useMemo` caches total price calculations for smoother performance  
  - `useCallback` ensures stable function references, minimizing unnecessary re-renders  
- 🧱 **Modular & Component-Based Architecture:**
  - Each core part (Dropzone, ImagePreview, ThemeToggle, PriceCalculator) is a standalone component  
  - Improves scalability, testing, and maintainability  
- 🎨 **Simplistic Design:**
  - Minimal, clean, and intuitive — focused on usability and clarity  

---

## 🧠 How It Works

1. **Upload Photos:**  
   Users drag and drop photos into the upload area handled by React Dropzone  

2. **Display Thumbnails:**  
   Each image appears with a preview, size selector, and delete button  

3. **Select Size & Calculate Price:**  
   Size changes trigger a memoized recalculation of the total price  

4. **Toggle Theme:**  
   Switch between dark and light modes with Next Themes instantly  

---


