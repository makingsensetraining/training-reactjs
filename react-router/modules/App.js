import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {  
    return (
      <div>        
        <h1>Selecting...</h1>
	        <ul role="nav">
            <li><NavLink to="/">Home</NavLink></li>
    			  <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/repos">Repository</NavLink></li>
	        </ul>    

          {/* add this */}
          {this.props.children}
      </div>
    )
  }
});



