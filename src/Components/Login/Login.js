import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap';
export default function Login({handleShowLogin,handleCloseLogin}) {
  return (
    <Modal show={handleShowLogin} onHide={handleCloseLogin}>
      <Modal.Header closeButton>
        <Modal.Title>Вхід</Modal.Title>
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
        <Button variant="secondary" onClick={handleCloseLogin}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCloseLogin}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
