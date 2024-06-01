import { Form } from "react-bootstrap";

export const CustomInput = ({ label, eRef, ...rest }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control ref={eRef} {...rest} />
    </Form.Group>
  );
};
