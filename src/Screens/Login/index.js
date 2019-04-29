import React from "react";
import { Form, Icon, Input, Button, Card } from "antd";
import "./index.css";
import fire from "../../config/firebaseConfig";
import swal from "sweetalert";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import pressSignUp from "../../Actions/loginAction.js";

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        fire
          .auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then(res => {
            this.props.history.push('/');
            // console.log(res)
          })
          .catch(error => swal("Error!", error.message, "error"));
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-container">
        <Card hoverable style={{ width: 300 }}>
          <h1>Login Form</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
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
              <a className="login-form-forgot" >
                Forgot password
              </a>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              Or <Link to="/signup">register now!</Link>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
export const WrappedLoginForm = Form.create({ name: "normal_login" })(
  LoginForm
);

// const mapStateToProps = state => {
//   return { loginUser: state.loginUser };
// };
// const mapDispatchToProps = dispatch => ({
//   pressSignUp: value => {
//     dispatch(pressSignUp(value));
//   }
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(WrappedLoginForm);
