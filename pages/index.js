import Head from 'next/head'
import Image from 'next/image'

import GallerySection from '../components/GallerySection'

import StyledMain from '../styles/main.styles'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <StyledMain>
        <h1>Hi, I am Tomo<br />
          <span className='blue'>Junior Developer In Vancouver </span>
        </h1>

        <GallerySection />

      </StyledMain>
    </div>
  )
}

export default Home
