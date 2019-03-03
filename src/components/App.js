import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

class App extends Component {
  //Chamada do método *handleInitialData* que carrega os dados inciais da App
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

// a função connect() transforma um componente em um container. Containers podem ler o estado do armazenador e despachar ações.
export default connect()(App)