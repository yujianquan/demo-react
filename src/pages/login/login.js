import React from "react";

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  handleLogin = () => {
    sessionStorage.setItem('user','yjq')
    this.props.history.push('/home')
  }
  render(){
    return (
      <div>
        <h1>Login Page</h1>
        <button onClick={this.handleLogin.bind(this)}>点击登录</button>
      </div>
    );
  }
}
export default Login;