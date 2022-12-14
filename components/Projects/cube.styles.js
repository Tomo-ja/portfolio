import styled from "styled-components";
import THEME from "../../styles/theme";


const Cube = styled.div`
	width: ${props => `${props.size}px`};
	margin-bottom: ${THEME.spacing.default};
	margin-right: ${THEME.spacing.default};
	aspect-ratio: 1;
  perspective: 400px;

	.cube__self{
	width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(${props => `-${props.size / 2}px`});
  transition: transform 1s;
	}

	.cube__face{
		position: absolute;
		width: 100%;
		height: 100%;

	}

	.cube__face-front{
		background-color: ${THEME.colors.black};
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center top;
		transform: rotateY(  0deg) translateZ(${props => `${props.size / 2}px`});

		display: flex;
		justify-content: end;
		align-items: flex-end;
	}

	.cube__face-right{
		background-color: ${THEME.colors.green};
		transform: rotateY( 90deg) translateZ(${props => `${props.size / 2}px`});
	}

	:hover{
		.cube__self{
			transform: translateZ(${props => `-${props.size / 2}px`}) rotateY( -90deg);
		}
	}

	@media only screen and (max-width: 895px) {

		margin-bottom: ${props => `${props.size + 16 }px`};

		.cube__face-right{
			transform: translateY(${props => `${props.size - 56.5}px`}) translateZ(${props => `${props.size / 2}px`});
			z-index: -1;
		}

		:hover {
			.cube__self{
				transform: translateZ(${props => `-${props.size / 2}px`});
			}
		}
  }

`

export default Cube