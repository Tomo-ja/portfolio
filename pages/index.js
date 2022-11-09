import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'

import StyledHome from '../components/Home/home.styles'
import StyledProfileImage from '../components/Home/profileImage.styles'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const Home = () => {

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Header />
      <Projects />
      <StyledHome id='profile'>
        <h1>I am a professional<br />
					<span className="blue">I am good at what I do</span>
				</h1>
        <section className='profile'>
          <div className='profile__story'>
            <p><span className='first-letter'>T</span>omo is a very <span className='yellow'>reliable</span> and <span className='yellow'>loyal worker</span> always interested in supporting his work team, he is a quick learner and his <span className='yellow'>interpersonal skill</span> has allowed him to develop productive working relationships with both our customers and staff. <br /><span className='bold'>~ Previous manager Efrain ~</span></p>
            <p><span className='first-letter'>I</span> am Tomonao Hashiguchi, born in Japan. Currently, I am working on learning fast and deeply how to build applications with <span className='yellow'>React</span>, <span className='yellow'>Typescript</span>. Moveover, I am working on a mobile application with <span className='yellow'>Swift</span> for ios and <span className='algorithms'></span> to solve problems efficiently. <br /><Link href='#projects'><span className='underLine bold'>Look at my projects...</span></Link></p>
            <p><span className='first-letter'>A</span>fter I saw programming as real magic in the 2000s, I have been attracted to programming by the fact they are growing up everyday to make what people want happen. Meeting new skills, ideas in this world never gets me bored and always inspires me. I would like to be the one who inspires someone in your team and grow up together. I am looking forward to hearing from you all! <br /><Link href='#contact'><span className='underLine bold'>Say hello...</span></Link></p>
          </div>
          <StyledProfileImage>
            <Image
              src='/profile.jpg'
              alt='Profile'
              layout='fill'
              objectFit='cover'
            />
          </StyledProfileImage>
        </section>
      </StyledHome>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
