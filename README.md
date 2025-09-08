# React UI Components Library

A modern, lightweight React component library featuring essential UI components including Button, Card, and Modal.


## 🚀 Quick Start

```jsx
import { Button, Card, Modal } from '@your-org/react-ui-components';
import '@your-org/react-ui-components/dist/styles.css';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Card title="Welcome">
        <p>This is a card component</p>
      </Card>
    </div>
  );
}
```

## 📚 Components

### Button

A versatile button component with multiple variants and sizes.

#### Usage

```jsx
import { Button } from '@your-org/react-ui-components';

<Button variant="primary" size="medium" onClick={handleClick}>
  Click Me
</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' | 'secondary' | 'danger' | 'success'` | `'primary'` | Button style variant |
| `size` | `'small' | 'medium' | 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Disable button |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `onClick` | `function` | - | Click handler |
| `children` | `ReactNode` | - | Button content |

### Card

A flexible container component for displaying content in a card layout.

#### Usage

```jsx
import { Card } from '@your-org/react-ui-components';

<Card 
  title="Card Title"
  subtitle="Optional subtitle"
  footer={<Button>Action</Button>}
>
  <p>Card content goes here</p>
</Card>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card title |
| `subtitle` | `string` | - | Card subtitle |
| `children` | `ReactNode` | - | Card body content |
| `footer` | `ReactNode` | - | Card footer content |
| `shadow` | `boolean` | `true` | Show card shadow |
| `padding` | `'none' | 'small' | 'medium' | 'large'` | `'medium'` | Card padding |

### Modal

A customizable modal dialog component.

#### Usage

```jsx
import { Modal } from '@your-org/react-ui-components';

const [isOpen, setIsOpen] = useState(false);

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
>
  <p>Modal content here</p>
</Modal>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Control modal visibility |
| `onClose` | `function` | - | Function called when modal closes |
| `title` | `string` | - | Modal header title |
| `children` | `ReactNode` | - | Modal body content |
| `footer` | `ReactNode` | - | Modal footer content |
| `size` | `'small' | 'medium' | 'large' | 'fullscreen'` | `'medium'` | Modal size |
| `closeOnOverlayClick` | `boolean` | `true` | Close modal when clicking overlay |
| `showCloseButton` | `boolean` | `true` | Show close button in header |

## 🎨 Theming

The library supports custom theming through CSS variables:

```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --danger-color: #dc3545;
  --success-color: #28a745;
  --modal-overlay-bg: rgba(0, 0, 0, 0.5);
  --card-border-radius: 8px;
  --button-border-radius: 4px;
}
```

## 💻 Development

### Prerequisites

- Node.js >= 14
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-org/react-ui-components.git
cd react-ui-components
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

### Building

```bash
npm run build
```

### Testing

```bash
npm run test
```

### Storybook

View and interact with components in isolation:

```bash
npm run storybook
```

## 📖 Examples

### Complete Modal Example

```jsx
import React, { useState } from 'react';
import { Button, Modal } from '@your-org/react-ui-components';

function MyApp() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        Open Modal
      </Button>
      
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Confirm Action"
        footer={
          <>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setShowModal(false)}>
              Confirm
            </Button>
          </>
        }
      >
        <p>Are you sure you want to proceed?</p>
      </Modal>
    </>
  );
}
```

### Card Grid Example

```jsx
import { Card, Button } from '@your-org/react-ui-components';

function CardGrid() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
      {items.map(item => (
        <Card
          key={item.id}
          title={item.title}
          footer={<Button size="small">Learn More</Button>}
        >
          <p>{item.description}</p>
        </Card>
      ))}
    </div>
  );
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: aliahmad3843@gmail.com
- 💬 Discord: [Join our community] https://discord.gg/e8BCsmYvsh

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Bundled with [Rollup](https://rollupjs.org/)
- Tested with [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/react)

## 📊 Stats

![npm version](https://img.shields.io/npm/v/@your-org/react-ui-components)
![npm downloads](https://img.shields.io/npm/dm/@your-org/react-ui-components)
![license](https://img.shields.io/npm/l/@your-org/react-ui-components)
![build status](https://img.shields.io/github/workflow/status/your-org/react-ui-components/CI)