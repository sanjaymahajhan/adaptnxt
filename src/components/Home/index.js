import Sidebar from "../Sidebar";
import MainContent from "../MainContent";
import Header from "../Header";

import "./index.css";
import { Component } from "react";

class Home extends Component {
  state = { showSidebar: true };

  menuClicked = () => {
    const { showSidebar } = this.state;
    this.setState({ showSidebar: !showSidebar });
  };

  render() {
    const { showSidebar } = this.state;
    return (
      <>
        <Header menuClicked={this.menuClicked} />
        <div className="container">
          {showSidebar ? <Sidebar /> : null}
          <MainContent />
        </div>
      </>
    );
  }
}
export default Home;
