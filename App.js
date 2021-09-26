import React, { Component } from 'react';
import './calculator.css';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero: ""
        }
        this.digitar = this.digitar.bind(this);
        this.clear = this.clear.bind(this);
        this.result = this.result.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    digitar(e){
        var state = this.state;
        state.numero = state.numero.concat(e.target.name);
        this.setState(state);
    }

    clear(){
        var state = this.state;
        state.numero = state.numero.slice(0,state.numero.length-1)
        this.setState(state)
    }

    result(){
        try{
            var state = this.state;
            state.numero = new String(eval(state.numero));
            this.setState(state)
        }catch(erro){
            this.setState({numero:"Syntax Error"});
        }        
    }

    limpar(){
        this.setState({numero:""});
    }

    render(){
        return(
            <div className="container">
                <div className="calculator" >
                    <input className="display" value={this.state.numero} />
                    <div className="btns" >
                        <button onClick={this.limpar} className="btn op igual">C</button>
                        <button onClick={this.clear}  className="btn op">&#60;</button>
                        <button onClick={this.digitar} name="+" className="btn op">+</button>
                        <button onClick={this.digitar} name="7" className="btn">7</button>
                        <button onClick={this.digitar} name="8" className="btn">8</button>
                        <button onClick={this.digitar} name="9" className="btn">9</button>
                        <button onClick={this.digitar} name="/" className="btn op">/</button>
                        <button onClick={this.digitar} name="4" className="btn">4</button>
                        <button onClick={this.digitar} name="5" className="btn">5</button>
                        <button onClick={this.digitar} name="6" className="btn">6</button>
                        <button onClick={this.digitar} name="*" className="btn op">X</button>
                        <button onClick={this.digitar} name="1" className="btn">1</button>
                        <button onClick={this.digitar} name="2" className="btn">2</button>
                        <button onClick={this.digitar} name="3" className="btn">3</button>
                        <button onClick={this.digitar} name="-" className="btn op">-</button>
                        <button onClick={this.result}  className="btn igual">=</button>
                        <button onClick={this.digitar} name="0" className="btn">0</button>
                        <button onClick={this.digitar}  name="." className="btn">.</button>
                        
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default App;