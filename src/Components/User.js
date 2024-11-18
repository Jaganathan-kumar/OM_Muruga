import React from "react";

class User extends React.Component{

    constructor(props) {
        super(props);
        
        //console.log(this.props.name+"childConstructor")
        this.state ={
            userInfo:{
                name:"Dummy",
                location: "Dummay Location",
                

            
            }
            
            
        }

        
    }

    async componentDidMount(){
        //console.log(this.props.name+"childcomponent");

        const data = await fetch("https://api.github.com/users/Jaganathan-kumar");
        const json = await data.json();

        this.setState({
            userInfo:json
        })

        console.log(json);
    
    
    
    }


    render(){
        //console.log(this.props.name+"childRender")
       const {name, id, avatar_url} = this.state.userInfo;
        
        return(
            <div>
                <img src={avatar_url} alt="" />
            <h3>Name: {name}</h3>
            <h3>City: {id}</h3>
            <h3>Contact: jagankumar0813@gmail.com</h3>
            </div>
        )
    }
}

export default User;