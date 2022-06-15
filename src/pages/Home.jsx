import Crypto from '../components/Crypto'
import Hero from '../components/Hero'
import Trending from '../components/Trending'

function Home({ coins }) {
  return (
    <>
      <Hero />
      <Crypto coins={coins} />
      <Trending coins={coins} />
    </>
  )
}

export default Home