import styled from "styled-components";


const Cube = styled.div`
	width: ${props => `${props.size}px`};
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
		background-color: red;
		transform: rotateY(  0deg) translateZ(${props => `${props.size / 2}px`});
	}

	.cube__face-right{
		background-color: blue;
		transform: rotateY( 90deg) translateZ(${props => `${props.size / 2}px`});
	}

	:hover{
		.cube__self{
			transform: translateZ(${props => `-${props.size / 2}px`}) rotateY( -90deg);
		}
	}

`

export default Cube