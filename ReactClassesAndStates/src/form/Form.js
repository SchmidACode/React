import React from "react";

class Form extends React.Component
{
    state = {name:"Your name", email:"Your email"}

    //updateName = (event) => this.setState({name: event.target.value})
    //updateEmail = (event) => this.setState({email: event.target.value})

    update = (event) => this.setState({[event.target.name]:event.target.value})

    render()
    {
        return(
            <div>
                <hr/>
                <form>
                    {/* Name: <input value={this.state.name} onChange={this.updateName}/> <br/>
                    Email: <input value={this.state.email} onChange={this.updateEmail}/> */}
                    Name: <input name="name" value={this.state.name} onChange={this.update}/> <br/>
                    Email: <input name="email" value={this.state.email} onChange={this.update}/>
                </form>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <hr/>
            </div>

        )

    }
}

export default Form;