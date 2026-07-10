import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import SAlert from "../../components/Alert";
import { useNavigate } from "react-router-dom";
import SForm from "./form";
import { postData } from "../../utils/fetchData";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/auth/actions";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [alert, setAlert] = useState({
    status: false,
    message: "",
    type: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      let res = await postData(`/cms/auth/signin`, form);
      dispatch(
        userLogin(
          res.data.data.token,
          res.data.data.role,
          res.data.data.email,
          res.data.data.refreshToken
        )
      );
      setIsLoading(false);
      navigate("/");
    } catch (err) {
      setAlert({
        status: true,
        message: err?.response?.data?.msg ?? "Internal Server Error",
        type: "danger",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-signin">
      <Container style={{ maxWidth: "460px" }}>
        {alert.status && (
          <div className="mb-4">
            <SAlert message={alert.message} type={alert.type} />
          </div>
        )}
        <Card className="signin-card shadow">
          <Card.Header className="signin-header text-center">
            <h2 className="fw-bold mb-1" style={{ color: "#1e1b4b" }}>Welcome Back</h2>
            <p className="text-muted small">Enter your credentials to access the admin dashboard</p>
          </Card.Header>
          <Card.Body className="signin-body">
            <SForm
              form={form}
              handleChange={handleChange}
              isLoading={isLoading}
              handleSubmit={handleSubmit}
            />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default SignIn;
