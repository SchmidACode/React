import React from "react";

class Range extends React.Component
{
    state = {number:120}

    range = (event) => this.setState({number: event.target.value})

    render()
    {
        return(
            <>
                <input type="range" value={this.state.number} min="100" max="200" onChange={this.range}/>
                <p>{this.state.number}</p>
            </>
        )
    }

}

export default Range;