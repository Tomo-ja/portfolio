import Head from "next/head"
import { useEffect, useState } from "react"

import StyledProjects from "../components/Projects/projects.styles"
import Cube from "../components/Projects/cube.styles"

import projectsData from "../data/projectsData"

const Projects = () => {

	const [cubeSize, setCubeSize] = useState(385);


	const handleScreenResize = () => {
		if (typeof window === 'undefined') { return }
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
			<StyledProjects>
				<h2>I am Junior<br />
					<span className="blue">But I am good at what I do</span>
				</h2>
				<section>
					{projectsData.map(project => (
						<Cube 
							size={cubeSize}
							key={project.title}
						>
							<div className="cube__self">
								<div 
									className="cube__face cube__face-front" 
									style={{backgroundImage: `url(${project.imgUrl})`}}
								>
									<h3>{project.title}</h3>
								</div>
								<div className="cube__face cube__face-right">
									explain
								</div>
							</div>
						</Cube>
					))}
				</section>
			</StyledProjects>
		</div>
	)
}

export default Projects