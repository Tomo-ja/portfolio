import styled from "styled-components";
import THEME from "../../styles/theme";

const StyledGallerySection = styled.section`

	display: flex;
	justify-content: center;
	width: 100%;

	perspective: 800px;

	position: relative;
	transform-style: preserve-3d;
	transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

	&.zoomOut{
		scale: 0.5;
	}
	
	&.zoomIn{
		transform: translateY(-125px);
	}
`

export default StyledGallerySection