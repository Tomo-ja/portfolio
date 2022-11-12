import styled from "styled-components";
import StyledMain from "../../styles/main.styles";
import THEME from "../../styles/theme";
import { skillNamePopup } from "../../styles/animations.styles";

const StyledHome = styled(StyledMain)`
	padding-top: 120px;
	h1{
		text-align: right;
	}

	p{
		margin-bottom: ${THEME.spacing.middle};
		font-size: ${THEME.fontSize.middle};
		line-height: 1.5em;
		letter-spacing: 0.025em;
	}

	.profile {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: ${THEME.spacing.xLarge};
	}

	.profile__story{
		width: 60%;
		margin-right: ${THEME.spacing.large};
		float: left;
		font-family: 'Noto Serif', serif;

	}

	.first-letter{
		font-size: ${THEME.fontSize.xxLarge};
		padding: 6px 3px 5px 0px;
		margin-right: 5px;
		float: left;
	}

	.skills-set{
		display: grid;
		grid-template-columns: repeat(auto-fill, 30px);
		gap: 30px;
		justify-content: space-between;
		margin-top: ${THEME.spacing.large};

		&__skill{
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;

			&__name{
				width: 0;
				padding: 0;
				border: none;
				border-radius: 5px;
				background-color: ${THEME.colors.black};
				color: ${THEME.colors.black};
				font-family: 'Raleway', sans-serif;
				font-size: ${THEME.fontSize.xSmall};
				font-weight: 700;
				text-align: center;
				transform: translateY(10px) ;
				position: absolute;
				opacity: 0;
				z-index: 0;
			}
			&__icon{
				width: 30px;
				height: 30px;
				background-color: ${THEME.colors.black};
				position: relative;
				z-index: 10;
				
				:hover + .skills-set__skill__name{
						background-color: ${THEME.colors.black};
						animation: ${skillNamePopup} 0.5s forwards;
					}
				}
			}
		}
	}



	@media only screen and (max-width: 1000px)  {
		p{
			font-size: ${THEME.fontSize.default};
			
		}
  }

	@media only screen and (max-width: 800px)  {
		p{
			font-size: ${THEME.fontSize.default};
			
		}
		.profile{
			flex-direction: column;
		}

		.profile__story{
			width: 100%;
			margin-right: 0;
			margin-bottom: ${THEME.spacing.large}; 
		}
  }

`

export default StyledHome