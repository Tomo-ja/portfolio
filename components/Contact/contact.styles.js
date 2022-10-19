import styled from "styled-components";
import StyledMain from "../../styles/main.styles";
import THEME from "../../styles/theme";

const StyledContact = styled(StyledMain)`


	section{
		display:flex;
	}

	.accountInfo{
		margin-left: ${THEME.spacing.xxLarge};
	}


	@media only screen and (max-width: 760px) {
		section{
			flex-direction: column;
		}
		.accountInfo{
			display: flex;
			margin-left: 0;
		}
	}
`

export default StyledContact