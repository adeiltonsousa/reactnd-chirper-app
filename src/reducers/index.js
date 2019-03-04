import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import tweets from './tweets'
import { loadingBarReducer } from 'react-redux-loading'

/* 
Inicializamos cada fatia do armazenador ao configurar um valor de
estado (state) padrão como o primeiro parâmetro de cada função redutora /reducers/tweets.js - users.js - authedUsers.js
*/

// Os 3 redutores foram combinados em apenas um objeto para o estado, pois a função createStore aceita apenas um redutor.
export default combineReducers ({
    authedUser,
    users,
    tweets,
    loadingBar: loadingBarReducer,
}) 