import React from "react";
import { Form, Icon, Input, Button, Card } from "antd";
import "./index.css";
import fire from "../../config/firebaseConfig";
import swal from "sweetalert";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fire
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password)
          .then(res => {
            this.props.history.push('/');
            // console.log(res);
          })
          .catch(error => swal("Error!", error.message, "error"));
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="signup-container">
        <div className="signup-container-inner1">
          <div className="signup-container-inner1-div1" />
          <div className="signup-container-inner1-div2">
            <div>
              <Link to="/login">Go To Log In</Link>
            </div>
          </div>
        </div>
        <div className="signup-container-inner2">
          <Card hoverable style={{ width: 300 }}>
            <h1>SignUp Form</h1>
            <Form onSubmit={this.handleSubmit} className="signup-form">
              <Form.Item>
                {getFieldDecorator("userName", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon
                        type="mail"
                        theme="outlined"
                        style={{ color: "rgba(0,0,0,.25)" }}
                      />
                    }
                    placeholder="Email"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="signup-form-button"
                >
                  SignUp
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export const WrappedSignUpForm = Form.create({ name: "normal_signup" })(
  SignUpForm
);
