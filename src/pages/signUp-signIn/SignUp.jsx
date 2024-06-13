import { CustomInput } from "../../components/customInput/CustomInput";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { postNewUser } from "../../helper/userAxios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "./formSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form } = useSelector((state) => state.formInfo);
  const inputs = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "James Bond",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "james.bond@gmail.com",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      type: "number",
      placeholder: "0845000589",
      required: false,
    },
    {
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "******",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "******",
      required: true,
    },
  ];
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    dispatch(setForm({ ...form, [name]: value }));
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Passwords donot match");
    }

    const responsePending = postNewUser(rest);
    toast.promise(responsePending, {
      pending: "Please Wait ....",
    });

    const { status, message } = await responsePending;
    toast[status](message);
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
                <CustomInput key={i} {...input} onChange={handleOnChange} />
              ))}
              <div>
                <Button type="submit">Submit</Button>
              </div>
              <div className="d-flex mt-2">
                Already have a account. SignIn
                <div
                  onClick={() => navigate("/signin")}
                  className="pointer text-primary"
                >
                  &nbsp;here.
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </DefaultLayout>
    </div>
  );
};

export default SignUp;
