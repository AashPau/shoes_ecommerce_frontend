import { useRef } from "react";
import { CustomInput } from "../../components/CustomInput";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";

const SignIn = () => {
  const emailRef = useRef("");
  const passRef = useRef("");
  const inputs = [
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "james.bond@gmail.com",
      required: true,
      eRef: emailRef,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "******",
      required: true,
      eRef: passRef,
    },
  ];

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    console.log(email, password);
    if (!email || !password) {
      return toast.error("Both field must be filled");
    } else {
      toast("everything good till here");
    }
  };
  return (
    <div>
      <DefaultLayout>
        <Row className="mb-5">
          <Col className="d-flex">
            <Form
              onSubmit={handleOnSubmit}
              className="m-auto mt-5  justify-content-center rounded border-black shadow-lg p-5"
              style={{ width: "450px" }}
            >
              <h1>Sign Up</h1>
              <hr />
              {inputs.map((input, i) => (
                <CustomInput key={i} {...input} />
              ))}
              <div>
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </DefaultLayout>
    </div>
  );
};

export default SignIn;
