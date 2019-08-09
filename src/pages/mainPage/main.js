import React from "react";

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render(){
    return (
      <div>
        <ul>
          <li>
            <span onClick={() => this.props.history.push("/about")}>About</span>
          </li>
        </ul>
        <hr />
      </div>
    )
  }
}

export default HomePage;
