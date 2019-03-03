import React, { Component } from 'react'
import { connect } from 'react-redux'
//formatTweets trás os dados de um tweeter ordenados dentro de um objeto
import { formatTweet } from '../utils/helpers'

class Tweet extends Component {
    render () {
        console.log(this.props)
        return (
            <div className='tweet'>

            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, tweets}, { id }) {
    const tweet = tweets[id]

    return {
        authedUser,
        tweet: formatTweet(tweet, users[tweet.author], authedUser)
    }
}


export default connect(mapStateToProps)(Tweet)