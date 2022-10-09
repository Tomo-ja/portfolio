import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import StyledHome from '../components/Home/home.styles'
import StyledProfileImage from '../components/Home/profileImage.styles'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <StyledHome>
        <h1>Hi, I am Tomo<br />
          <span className='blue'>Junior Developer In Vancouver </span>
        </h1>
        <section className='profile'>
          <StyledProfileImage>
            <Image 
              src='/profile.jpg'
              alt='Profile'
              layout='fill'
              objectFit='cover'
            />
          </StyledProfileImage>
          <div className='profile__story'>
            <p><span className='first-letter'>M</span>agic. That was the first impression of programing when I met them in 2020. What I do like of this world is there is always a way to make what we want happen unless I give up which never I do. Meeting new skills, ideas, and ways never gets me board. That&apos;s why I&apos;ve chosen this career path.</p>
            <p>Hello, my friend. My name is <span className='blue'>Tomonao Hashiguchi</span> born in Japan. Currently, I&apos;m studying web and ios application development at a college in Vancouver, Canada. Although I&apos;m still fresh in this industry, I am confident at what I do. <Link href='/projects'><span className='underLine bold'>Look at my projects...</span></Link></p>
            <p>As much as I&apos;m into programming world, I do like meeting <span className='blue'>people</span>, having <span className='blue'>conversation</span>, and getting <span className='blue'>inspired</span>. After all, that is the reason why I move to Canada. I&apos;m looking forward to hearing from you all! <Link href='/contact'><span className='underLine bold'>Say hello...</span></Link></p>
          </div>
        </section>

      </StyledHome>
    </div>
  )
}

export default Home
