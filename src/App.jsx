import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: '25 de Dezembro de 2019',
            newDeadline: ''
        }
    }

    changeDeadline() { //não muda diretamente, tem um objeto novo
        //this.setState({deadline: '25 de Novembro de 2019'}) 
        //console.log('state', this.state);
        this.setState({deadline: this.state.newDeadline});
    }

    render() { //return jsx
        return (
            <div className="App">
                <div className="App-title">Contagem para {this.state.deadline}</div>
                <div>
                    <div className="Clock-days">14 dias</div>
                    <div className="Clock-hours">30 horas</div>
                    <div className="Clock-minutes">15 minutos</div>
                    <div className="Clock-seconds">10 segundos</div>
                </div>
                <div>
                    <input
                         placeholder='new date'
                         onChange={event => this.setState({newDeadline: event.target.value})}
                     />
                    <button onClick={() => this.changeDeadline()}>Enviar</button>
                </div>
            </div>
        )

    }
}

export default App; 