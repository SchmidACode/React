import React from "react";

class Length extends React.Component
{
    constructor(props){
        super(props)
        this.state = {length: 17}

        this.add = this.add.bind(this);
        this.reset = this.reset.bind(this);
    }

    add() {
        this.setState({ length: this.state.length + 5 });
    }
    reset() {
        this.setState({ length: 17})
    }

    render()
    {
        return(
            <>
                <div><input size={this.state.length}></input></div>
                <button onClick={this.add}>Увеличить</button>
                <button onClick={this.reset}>Сбросить</button>
            </>

        );
    }

}

export default Length;