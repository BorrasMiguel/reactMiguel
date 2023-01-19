import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCardComponent'

export function App () {
    const formatUserName = (userName) => `@${userName}`

    return (
        <section className="App">
            <TwitterFollowCard 
                formatUserName={formatUserName} 
                initialIsFollowing={true} userName="midudev" 
                name="Miguel Ángel Durán" />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                initialIsFollowing={false} userName="pheralb" 
                name="Pablo Hernandez" />

            <TwitterFollowCard 
                formatUserName={formatUserName} 
                initialIsFollowing
                userName="elonmusk" 
                name="Elon Musk" />
        </section>
    )
}