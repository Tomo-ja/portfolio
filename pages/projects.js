import Head from "next/head"

import StyledMain from "../styles/main.styles"
import Cube from "../components/Projects/cube.styles"
import { useEffect, useState } from "react"

const Projects = () => {

	const [cubeSize, setCubeSize] = useState(300);


	const handleScreenResize = () => {
		console.log(window.innerWidth)
	}
	useEffect(() => {
		window.addEventListener('resize', handleScreenResize)
		return () => window.removeEventListener('resize', handleScreenResize)
	}, [])

	return (
		<div>
			<Head>
				<title>Projects</title>
        <link rel='icon' href='/favicon.ico'/>
			</Head>
			<StyledMain>
				<h2>I am Junior<br />
					<span className="blue">But I am good at what I do</span>
				</h2>
				<Cube size={200}>
					<div className="cube__self">
						<div className="cube__face cube__face-front">image</div>
						<div className="cube__face cube__face-right">explain</div>
					</div>
				</Cube>
			</StyledMain>
		</div>
	)
}

export default Projects