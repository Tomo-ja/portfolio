import styled from "styled-components";
import StyledImage from "../../styles/image.styles";

const LogoImage = styled(StyledImage)`
	@media only screen and (max-width: 565px) {
		transform-origin: left;
		transform: scale(0.6);
  }
`

export default LogoImage