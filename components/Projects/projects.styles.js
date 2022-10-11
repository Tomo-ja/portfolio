import styled from "styled-components";
import StyledMain from "../../styles/main.styles";
import THEME from "../../styles/theme";

const StyledProjects = styled(StyledMain)`

	h2{
		margin-bottom: 2em;
	}

	h3{
		color: ${THEME.colors.white};
		background-color: ${THEME.colors.black};
		border: 1px solid ${THEME.colors.white};
		padding: ${THEME.spacing.default};
	}

	section{
		display: flex;
		flex-wrap: wrap;
	}
`

export default StyledProjects