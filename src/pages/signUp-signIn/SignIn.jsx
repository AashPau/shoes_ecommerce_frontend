import { useRef, useEffect } from "react";
import { CustomInput } from "../../components/customInput/CustomInput";
import { DefaultLayout } from "../../components/layouts/DefaultLayout";
import { Button, Col, Form, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { signInUser } from "../../helper/userAxios";
import { getUserObj } from "../../features/users/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const emailRef = useRef("");
  const passRef = useRef("");
  const navigate = useNavigate();
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

  const { user } = useSelector((state) => state.userInfo);
  console.log(user);

  useEffect(() => {
    user?._id && navigate("/dashboard");
  }, [user?._id, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    // console.log(email, password);
    if (!email || !password) {
      return toast.error("Both field must be filled");
    } else {
      const { status, message, tokens } = await signInUser({ email, password });
      toast[status](message);
      //store tokens in the session
      sessionStorage.setItem("accessJWT", tokens.accessJWT);
      localStorage.setItem("refreshJWT", tokens.refreshJWT);

      // result?.status === "success"
      //   ? toast.success("SignIn successful")
      //   : toast.error("SignIn unsuccessful, please try again");

      if (status === "success") {
        dispatch(getUserObj());
      }
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
