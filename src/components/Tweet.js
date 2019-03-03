import React, { Component } from 'react'
import { connect } from 'react-redux'
//formatTweets trás os dados de um tweeter ordenados dentro de um objeto
import { formatTweet } from '../utils/helpers'

class Tweet extends Component {
    render () {
        const { tweet } = this.props

        if (tweet === null) {
            return <p>This Tweet doesn't existd</p>
        }

        return (
            <div className='tweet'>

            </div>
        )
    }
}

/* 
mapStateToProps aceita dois argumentos:
- o estado do armazenador
- as props que foram passadas para o componente Tweet
*/
function mapStateToProps ({authedUser, users, tweets}, { id }) {
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null

    return {
        authedUser,
        tweet: tweet
            ?   formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
            :   null
    }
}


export default connect(mapStateToProps)(Tweet)