import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
export default function Registration({showRegistration,handleCloseRegistration}) {
  return (
    <Modal show={showRegistration} onHide={handleCloseRegistration}>
      <Modal.Header closeButton>
        <Modal.Title>Реєстрація</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseRegistration}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseRegistration}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
