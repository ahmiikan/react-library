# React Components Library

A lightweight React component library built with **Vite** and **CSS Modules**, featuring reusable and customizable UI components like **Button**, **Card**, and **Modal**.  

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/ahmiikan/react-library
cd react-library
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 🧩 Components

### 🔘 Button
A customizable button with support for variants, sizes, and full-width styling.

```jsx
import Button from "./components/Button";

<Button 
  variant="primary" 
  size="large" 
  onClick={() => alert("Clicked!")}
>
  Click Me
</Button>
```

**Props**
- `variant`: `"primary" | "secondary" | "danger"` (default: `"primary"`)
- `size`: `"small" | "medium" | "large"` (default: `"medium"`)
- `disabled`: `boolean` (default: `false`)
- `fullWidth`: `boolean` (default: `false`)

---

### 🃏 Card
A flexible card component with optional header, image, body, and footer.

```jsx
import Card from "./components/Card";

<Card 
  title="Card Title" 
  subtitle="Card Subtitle"
  image="https://via.placeholder.com/300"
  footer={<button>Action</button>}
  hoverable
  shadow="large"
>
  <p>This is the card content.</p>
</Card>
```

**Props**
- `title`: `string`
- `subtitle`: `string`
- `image`: `string`
- `footer`: `ReactNode`
- `hoverable`: `boolean` (default: `false`)
- `bordered`: `boolean` (default: `true`)
- `shadow`: `"small" | "medium" | "large"` (default: `"medium"`)

---

### 🪟 Modal
A modal dialog with overlay support, escape key handling, and customizable content.

```jsx
import Modal from "./components/Modal";
import { useState } from "react";

function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal 
        isOpen={open} 
        onClose={() => setOpen(false)} 
        title="My Modal"
        footer={<button onClick={() => setOpen(false)}>Close</button>}
      >
        <p>This is modal content.</p>
      </Modal>
    </>
  );
}
```

**Props**
- `isOpen`: `boolean` (required)
- `onClose`: `function` (required)
- `title`: `string`
- `footer`: `ReactNode`
- `size`: `"small" | "medium" | "large"` (default: `"medium"`)
- `closeOnOverlayClick`: `boolean` (default: `true`)
- `showCloseButton`: `boolean` (default: `true`)

---

## 📂 Project Structure

```
react-components-library/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Modal/
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── index.html
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.  

---

## 📜 License

This project is licensed under the **MIT License**.  
