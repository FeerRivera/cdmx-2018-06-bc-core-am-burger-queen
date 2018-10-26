import React, { Component } from 'react';
import ResultBreak from './Resbqueen';
import ResultDinner from './Bqueen';
import '../App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBreak: true,
      showDinner: false,
    };
  }
  clickBreakfast = () => {
    this.setState({ showDinner: false, showBreak: true });
  }
  clickDinner = (e) => {
    this.setState({ showDinner: true, showBreak: false });
  }

  render() {
    return (
      <div>
        <nav className="navbar text-white">
          <h4>BURGER QUEEN🍔👑</h4>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-6 buttons">
                  <div className="btn " onClick={this.clickBreakfast}>Desayuno</div>
                  <div className="btn " onClick={this.clickDinner}>Almuerzo</div>
                </div>
                <div className="col-6 ">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {this.state.showBreak ? <ResultBreak /> : null}
        </div>
        <div >
          {this.state.showDinner ? <ResultDinner /> : null}
        </div>
      </div >
    )
  }
}

export default App;
