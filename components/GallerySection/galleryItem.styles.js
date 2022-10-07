import styled from "styled-components";
import THEME from "../../styles/theme";


const StyledGalleryItem = styled.article`

	display: block;
	width: 400px;
	aspect-ratio: 0.75;
	border-radius: ${THEME.radius.large};
	background-color: ${props => props.bgColor};
	transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

	position: relative;
	box-shadow: 0px 40px 60px -38px rgba(255,255,255,0.75);


	&.leftSide{
		transform-origin: right;
		transform: rotateY(45deg) scaleX(0.75);
	}

	&.rightSide {
		transform-origin: left;
		transform: rotateY(-45deg) scaleX(0.75);
	}

	&.center{
		margin-inline: ${THEME.spacing.large};
	}


`

export default StyledGalleryItem