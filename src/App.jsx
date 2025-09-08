import React, { useState } from 'react';
import { Button, Card, Modal } from './components';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState('default');

  const openModal = (type) => {
    setSelectedModal(type);
    setModalOpen(true);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>React Components Library</h1>
        <p>A modern component library built with Vite and React</p>
      </header>

      <main className="app-main">
        {/* Buttons Section */}
        <section className="section">
          <h2>Buttons</h2>
          <div className="component-grid">
            <div className="component-group">
              <h3>Variants</h3>
              <div className="button-group">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>

            <div className="component-group">
              <h3>Sizes</h3>
              <div className="button-group">
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
              </div>
            </div>

            <div className="component-group">
              <h3>States</h3>
              <div className="button-group">
                <Button>Normal</Button>
                <Button disabled>Disabled</Button>
                <Button fullWidth>Full Width</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="section">
          <h2>Cards</h2>
          <div className="cards-grid">
            <Card
              title="Basic Card"
              subtitle="This is a subtitle"
              shadow="small"
            >
              This is a basic card with title, subtitle and content. Cards are versatile components for displaying information.
            </Card>

            <Card
              title="Hoverable Card"
              subtitle="Hover me!"
              hoverable
              shadow="medium"
              onClick={() => console.log('Card clicked!')}
            >
              This card has hover effects and is clickable. Try hovering over it to see the animation.
            </Card>

            <Card
              title="Card with Image"
              image="https://picsum.photos/400/200"
              shadow="large"
            >
              This card includes an image at the top. Images automatically scale on hover when the card is hoverable.
            </Card>

            <Card
              title="Card with Footer"
              subtitle="Complete card example"
              footer={
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button size="small" variant="primary">Action</Button>
                  <Button size="small" variant="ghost">Cancel</Button>
                </div>
              }
            >
              This card demonstrates all features including a footer with action buttons.
            </Card>
          </div>
        </section>

        {/* Modals Section */}
        <section className="section">
          <h2>Modals</h2>
          <div className="button-group">
            <Button onClick={() => openModal('small')}>Small Modal</Button>
            <Button onClick={() => openModal('medium')} variant="success">Medium Modal</Button>
            <Button onClick={() => openModal('large')} variant="danger">Large Modal</Button>
            <Button onClick={() => openModal('footer')} variant="secondary">Modal with Footer</Button>
          </div>
        </section>

        {/* Modal Components */}
        <Modal
          isOpen={modalOpen && selectedModal === 'small'}
          onClose={() => setModalOpen(false)}
          title="Small Modal"
          size="small"
        >
          <p>This is a small modal dialog. It's perfect for simple confirmations or brief messages.</p>
        </Modal>

        <Modal
          isOpen={modalOpen && selectedModal === 'medium'}
          onClose={() => setModalOpen(false)}
          title="Medium Modal"
          size="medium"
        >
          <p>This is a medium-sized modal, which is the default size. It's suitable for most use cases.</p>
          <p>You can add multiple paragraphs and more complex content here.</p>
        </Modal>

        <Modal
          isOpen={modalOpen && selectedModal === 'large'}
          onClose={() => setModalOpen(false)}
          title="Large Modal"
          size="large"
        >
          <p>This is a large modal that can accommodate more content.</p>
          <p>Large modals are perfect for forms, detailed information, or when you need more space for your content.</p>
          <div style={{ marginTop: '20px' }}>
            <h3>Features:</h3>
            <ul>
              <li>Close on overlay click</li>
              <li>ESC key to close</li>
              <li>Smooth animations</li>
              <li>Customizable sizes</li>
            </ul>
          </div>
        </Modal>

        <Modal
          isOpen={modalOpen && selectedModal === 'footer'}
          onClose={() => setModalOpen(false)}
          title="Modal with Footer"
          size="medium"
          footer={
            <>
              <Button variant="ghost" onClick={() => setModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setModalOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p>This modal includes a footer with action buttons.</p>
          <p>Footers are useful for forms and confirmation dialogs where user actions are required.</p>
        </Modal>
      </main>
    </div>
  );
}

export default App;