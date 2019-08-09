import React from 'react'
import {Route,withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

// 私有路由，只有登录的用户才能访问
class PrivateRoute extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isAuthenticated:false
    }
  }
  componentWillMount(){
    let isAuth = sessionStorage.getItem('user') ? true : false
    this.setState({isAuthenticated:isAuth})
    if(!isAuth){
      const {history} = this.props
      setTimeout(()=>{
        history.replace("/login")
      },1000)
    }
  }
  render(){
    let {component:Component,path='/',exact=false,strict=false} = this.props
    return this.state.isAuthenticated ? (
      <Route  path={path} exact={exact}  strict={strict}  render={(props)=>( <Component {...props} /> )} />
        ) : ("请重新登录");
  }
}
PrivateRoute.propTypes = {
  path:PropTypes.string.isRequired,
  exact:PropTypes.bool,
  strict:PropTypes.bool,
  component:PropTypes.func.isRequired
}

export default withRouter(PrivateRoute)