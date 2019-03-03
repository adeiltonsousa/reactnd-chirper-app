import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'

const AUTHED_ID = 'tylermcginnis'

// Busca o método getInitialData no arquivo 'utils/api' que contem o estado incicial da app
export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
        .then(({ users, tweets }) => {
            //Chamada para os 3 Reducers que compoem o estado inicial
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }
}

console.log(AUTHED_ID)
