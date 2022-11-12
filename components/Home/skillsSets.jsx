import React from 'react'
import { DiRuby, DiMysql, DiSass, } from 'react-icons/di'
import { SiMongodb, SiJquery, SiBootstrap, SiJest, SiAntdesign, SiExpress, SiFigma, SiFirebase, SiStyledcomponents, SiMaterialui, SiTailwindcss,SiJavascript, SiTypescript, SiSwift, SiReact, SiHtml5, SiCss3, SiNextdotjs, SiNodedotjs, SiRubyonrails, SiRedux, SiGit, SiAmazonaws, SiGraphql, SiPostgresql, } from 'react-icons/si'

const data = [
	{icon: SiHtml5, name: 'HTML'},
	{icon: SiCss3, name: 'CSS'},
	{icon: SiJavascript, name: 'JavaScript'},
	{icon: SiTypescript, name: 'TypeScript'},
	{icon: SiSwift, name: 'Swift'},
	{icon: DiRuby, name: 'Ruby'},
	{icon: SiReact, name: 'React.js'},
	{icon: SiNextdotjs, name: 'Next.js'},
	{icon: SiNodedotjs, name: 'Node.js'},
	{icon: SiExpress, name: 'Express.js'},
	{icon: SiRubyonrails, name: 'Ruby on Rails'},
	{icon: DiMysql, name: 'MySQL'},
	{icon: SiGraphql, name: 'GraphQL'},
	{icon: SiPostgresql, name: 'PostgreSQL'},
	{icon: SiMongodb, name: 'MongoDB'},
	{icon: SiRedux, name: 'Redux'},
	{icon: SiGit, name: 'Git'},
	{icon: SiAmazonaws, name: 'AWS'},
	{icon: SiJest, name: 'Jest'},
	{icon: SiStyledcomponents, name: 'Styled Components'},
	{icon: DiSass, name: 'Sass'},
	{icon: SiTailwindcss, name: 'Tailwind CSS'},
	{icon: SiMaterialui, name: 'Material UI'},
	{icon: SiBootstrap, name: 'Bootstrap'},
	{icon: SiJquery, name: 'jQuery'},
	{icon: SiFirebase, name: 'Firebase'},
	{icon: SiAntdesign, name: 'Ant Design'},
	{icon: SiBootstrap, name: 'Bootstrap'},
	{icon: SiFigma, name: 'Figma'},
]


const SkillsSets = () => {
	return (
		<div className="skills-set">
			{data.map(skill => (
				<div className="skills-set__skill" key={skill.name}>
					<skill.icon className="skills-set__skill__icon"/>
					<span className="skills-set__skill__name">{skill.name}</span>
				</div>
			))}
		</div>
	)
}

export default SkillsSets
