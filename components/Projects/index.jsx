import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

import StyledProjects from "./projects.styles"
import StyledIconWrapper from "../../styles/iconWrapper.styles"
import StyledCube from "./cube.styles"

import projectsData from "../../data/projectsData"


const Projects = () => {

	const [cubeSize, setCubeSize] = useState(385);


	const handleScreenResize = () => {
		if (typeof window === 'undefined') { return }

		if (window.innerWidth > 895) {
			setCubeSize(385)
		} 
		else if (window.innerWidth > 704) {
			setCubeSize(350)
		}
		else if (window.innerWidth > 464) {
			setCubeSize(400)
		}
		else if (window.innerWidth < 465) {
			setCubeSize(350)
		}
	

	}
	useEffect(() => {
		window.addEventListener('resize', handleScreenResize)
		return () => window.removeEventListener('resize', handleScreenResize)
	}, [])

	return (
		<div id='projects'>
			<StyledProjects>
				<h1>Hi, I am Tomo<br />
          <span className='blue'>React / iOS Developer In Vancouver </span>
        </h1>
				<section>
					{projectsData.map(project => (
						<StyledCube 
							size={cubeSize}
							key={project.title}
						>
							<div className="cube__self">
								<div 
									className="cube__face cube__face-front" 
									style={{backgroundImage: `url(${project.imgUrl})`}}
								>
									<div className="project__title-front">
										<h3 >{project.title}</h3>
										{project.envList.map(env => (
											<span key={env} className="project__title-front__skill">{env}</span>
										))}
									</div>
								</div>
								<div className="cube__face cube__face-right project__detail">
									<div>
										<h3 className="project__title-right">{project.title}</h3>
										<div className='project__env'>
											{project.envList.map(env => (
												<span key={env}>{env}</span>
											))}
										</div>
										{project.description.map(paragraph => (
											<p className="project__description" key={paragraph[0]}>{paragraph}</p>
										))}
									</div>
									<div className="project__external-links">
										<StyledIconWrapper onProject={true}>
											<a href={project.githubUrl} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} color='white' /></a>
										</StyledIconWrapper>
										{project.productUrl &&
											<StyledIconWrapper onProject={true}>
												<a href={project.productUrl} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faArrowUpRightFromSquare} color='white' /></a>
											</StyledIconWrapper>
										}
									</div>
								</div>
							</div>
						</StyledCube>
					))}
				</section>
			</StyledProjects>
		</div>
	)
}

export default Projects