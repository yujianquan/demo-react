import React from 'react'

class Home extends React.Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <div>
        <nav>
          <ul>
            <li>
              Home
            </li>
            <li>
              trade
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}
export default Home;