import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  //Chamada do método *handleInitialData* que carrega os dados inciais da App
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
      <LoadingBar />
        { this.props.loading === true
          ? null
          :  <Dashboard /> }       
      </div>
    )
  }
}

//Função para renderizar a página apenas após carregar carregar os dados iniciais. 
function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
// a função connect() transforma um componente em um container. Containers podem ler o estado do armazenador e despachar ações.
export default connect(mapStateToProps)(App)