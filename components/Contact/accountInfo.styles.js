import styled from "styled-components";
import THEME from "../../styles/theme";

const StyledAccountInfo = styled.a`

	display: flex;
	margin-bottom: ${THEME.spacing.default};
	align-items: center;
	font-size: ${THEME.fontSize.small};
	position: relative;
	overflow: hidden;

	::after{
		content: '';
		position: absolute;
		width: 0;
		height: 1px;
		left: 50%;
		bottom: 0px;
		background-color: ${THEME.colors.lightBlue};
		transition: all 0.25s;
	}

	p{
		position: relative;
		transition: all 1s ease;
		margin-left: ${THEME.spacing.default};
		overflow: hidden;

	}

	:hover{
		::after{
			width: 100%;
			left: 0;
		}
		div{
			background-color: ${THEME.colors.lightBlue};
		}
		svg{
			color: ${THEME.colors.black};
		}
	}

	@media only screen and (max-width: 760px)  {
		margin-bottom: ${THEME.spacing.small};
		p{
			width: 0;
		}
  }


`

export default StyledAccountInfo
