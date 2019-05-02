import React from "react";
import "./index.css";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import Button from "../../Components/Button";
import Logout from "../../Components/Logout";
import fire from "../../config/firebaseConfig";
import SearchBar from "../../Components/Search";
import UploadButton from "../../Components/Upload"

const db = fire.firestore();
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
  state = {
    username: null,
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  getCurrentUserData = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.uid);
        var docRef = db.collection("users").doc(user.uid);
        docRef
          .get()
          .then(doc => {
            if (doc.exists) {
              this.setState({ username: doc.data().username }, () => {
                console.log("Document data:", doc.data().username);
              });
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
          })
          .catch(function(error) {
            console.log("Error getting document:", error);
          });
      } else {
        console.log("signout");
      }
    });
  };

  checkUserVisibility() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("User signIn");
      } else {
        this.props.getpropsFromHistory.push("/login");
      }
    });
  }

  componentDidMount() {
    this.getCurrentUserData();
    this.checkUserVisibility();
  }

  render() {
    console.log(this.props.getpropsFromHistory);
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" style={{ cursor: "auto", marginTop: 16 }}>
              <Icon type="user" style={{ fontSize: 25, marginLeft: -4 }} />
              <span style={{ color: "white" }}>{this.state.username}</span>
            </Menu.Item>
            <hr style={{color:'white'}}/>
            <Menu.Item
              key="2"
              onClick={() => this.props.getpropsFromHistory.push("/")}
            >
              <Icon type="home" />
              <span>Home</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="camera" />
              <span>Camera</span>
            </Menu.Item>
            <Menu.Item key="4">
            <UploadButton />
            </Menu.Item>
            {/* <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
              }
            >
              <Menu.Item key="5">Team 1</Menu.Item>
              <Menu.Item key="6">Team 2</Menu.Item>
            </SubMenu> */}
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#1a5791" }}>
            <div className="header-logout-maindiv">
              <div className="header-logout-innerdiv1" />
              <div className="header-logout-innerdiv2">
                <SearchBar />
              </div>
              <div className="header-logout-innerdiv3">
                <Logout getPropsHistory={this.props.getpropsFromHistory} />
              </div>
            </div>
          </Header>
          <Content className='' style={{ margin: "0 16px" }}>
            <div
              style={{ marginTop: 20, background: "#fff", height: "100vh" }}
            />
            <div></div>
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
