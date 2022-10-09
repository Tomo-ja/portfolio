import styled from "styled-components";

const StyledImage = styled.div`
	display: block;
	position: relative;
	width: ${props => props.width ? props.width : '100%'};
	height: ${props => props.height ? props.height : 'auto'};
	aspect-ratio: ${props => props.ratio ? props.ratio : 'auto'};
	transition: all 0.25s;
	overflow: hidden;

`

export default StyledImage