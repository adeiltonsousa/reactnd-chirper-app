import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  //Chamada do método *handleInitialData* que carrega os dados inciais da App
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        {/* Fragment permite renderizar os dois elementos (Loading e div) */}
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' component={NewTweet} />
              </div>}
          </div>
        </Fragment>
      </Router>

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