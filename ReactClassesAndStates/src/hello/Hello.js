import React from "react";
import './Hello.css'

class Hello extends React.Component
{
    constructor(props){
        super(props); // super - базовый класс. Вызывается конструктор базового класса
        this.state = {name: props.name}
        this.state = {status: false}
    }
    buttonHandler = () => 
        this.setState((state) => ({status: !state.status}));
    render()
    {
        return(
            <>
                <div>Привет {this.props.name} из props!</div>
                <div>Привет {this.state.name} из state!</div>
                <br/>
                <button onClick={this.buttonHandler}>{this.state.status ? 'Остановить' : 'Запустить'}</button>
                <div>{this.state.status ? 'Запущен' : 'Остановлен'}</div>
            </>
        );
    }
}

export default Hello;