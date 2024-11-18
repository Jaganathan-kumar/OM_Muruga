import React from 'react';
import User from './User'


class About extends React.Component{
  constructor(props){
    super(props)
    //console.log("constructor");

    
  }

  componentDidMount(){
    //console.log("component");
  }

  render(){
    //console.log("render");
    return(
    <div className="about">
        <h1>About us</h1>
        <User name={"First"} location={"Ranipet1(KPK)"} />
      

        
    </div>
  )

    
  }
}

export default About