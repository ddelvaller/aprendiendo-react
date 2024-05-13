import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard
                userName="ddelvaller"
                name="David Del Valle"
                isFollowing={true} />

            <TwitterFollowCard
                userName="elonmusk"
                name="Elon Musk"
                isFollowing={false} />

            <TwitterFollowCard
                userName="xmaop"
                name="Miguel Ángel Orellana"
                isFollowing />

            <TwitterFollowCard
                userName="twitter"
                name="X / Twitter"
                isFollowing={true} />

            <TwitterFollowCard
                userName="midudev"
                name="Miguel Durán"
                isFollowing={false} />
        </section>
    )
}