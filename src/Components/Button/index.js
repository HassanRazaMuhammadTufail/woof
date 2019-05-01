import React from "react";
// import "./index.css";
import { Button, Icon } from "antd";

class ButtonSize extends React.Component {
  state = {
    size: "large"
  };

  handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <Button
          style={{ width: 60, height: 60 }}
          type="primary"
          shape="circle"
          size={size}
        >
          <Icon type="form" style={{ fontSize: "30px" }} />
        </Button>
      </div>
    );
  }
}
export default ButtonSize;
