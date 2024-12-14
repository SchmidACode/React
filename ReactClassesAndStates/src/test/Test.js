import React from "react";

class Test extends React.Component
{
    constructor(props){
        super(props);
        this.state = {callsCount: props.arg};
        this.buttonHandler = this.buttonHandler.bind(this);
        console.clear();
        console.log("constructor done");
    }
    componentDidMount() // Срабатывает 1 раз 
    {
        console.log("ComponentDidAmount");
    }
    buttonHandler()
    {
        console.log("Fire");
        this.setState({callsCount: this.state.callsCount + 1});
    }
    render()
    {
        console.log("render 1")
        return(
            <>
                {console.log("render 2")}
                <div>
                    <button onClick={this.buttonHandler}>Start</button>
                </div>
            </>
        )
    }

}

export default Test ;