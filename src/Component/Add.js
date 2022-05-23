import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const Add = ({ newplayer }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");
  const [rate, setrate] = useState("");
  const [image_url, setImage_url] = useState("");
  const Add = () => {
    newplayer({ name, age, position, rate,image_url});
  handleClose();
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{marginTop:"20px"}}>
        Add player
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter position"
                onChange={(e) => setPosition(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter rate"
                onChange={(e) => setrate(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>posturl</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                onChange={(e) => setImage_url(e.target.value)}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={Add}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Add;
