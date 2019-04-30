import React from "react";
import "./index.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Button from "../Button";
import UploadButton from "../Upload"

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" style={{ cursor: "auto" }}>
              <Icon type="user" />
              <span style={{ color: "white" }}>Ahsan Ahmed</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="camera" />
              <span>Camera</span>
            </Menu.Item>
            {/* <Menu.Item key="4">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item> */}
            <Menu.Item key="4">
            <UploadButton />
            </Menu.Item>
            {/* <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="file" />
                  <span>Upload</span>
                </span>
              }
            >
              <Menu.Item key="5"><UploadButton /></Menu.Item>
              <Menu.Item key="6">Team 2</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            {/* <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Bill is a cat.
            </div> */}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <div className="footer-div1">
              <Button />
            </div>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;
