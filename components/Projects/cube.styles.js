import styled from "styled-components";



const Cube = styled.div`
	width: 200px;
	aspect-ratio: 1;
  perspective: 400px;

	.cube__self{
	width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform: translateZ(-100px);
  transition: transform 1s;
	}

	.cube__face{
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.cube__face-front{
		background-color: red;
		transform: rotateY(  0deg) translateZ(100px);
	}

	.cube__face-right{
		background-color: blue;
		transform: rotateY( 90deg) translateZ(100px);
	}

	:hover{
		.cube__self{
			transform: translateZ(-100px) rotateY( -90deg);
		}
	}

`

export default Cube