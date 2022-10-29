import styled from "styled-components";
import THEME from "../../styles/theme";

const StyledForm = styled.form`

	width: 60%;
	margin-bottom: ${THEME.spacing.xLarge};
	font-family: 'Raleway', sans-serif;

	input, textarea{
		all: unset;
	}

	.form{
		&__group{
			margin-bottom: 30px;
			position: relative;
		}
		&__input{
			width: 100%;
			padding-block: 10px;
			border-bottom: 1px solid ${THEME.colors.white};
			font-size: ${THEME.fontSize.default};

			&:focus ~ label,
			&:valid ~ label {
				top: -14px;
				font-size: ${THEME.fontSize.small};
				color: ${THEME.colors.lightBlue};
			}
			&:focus ~ .contact__form__border::before{
				width: 100%;
			}
		}

		&__label{
			position: absolute;
			top: 10px;
			left: 0px;
			color: ${THEME.colors.lightGray};
			font-size: ${THEME.fontSize.default};
			pointer-events: none;
			transition: 300ms ease all;
		}

		&__border{
			display: block;
			position: relative;
			width: 100%;
			&::before{
				content: '';
				position: absolute;
				bottom: 0;
				left: 0%;
				height: 2px;
				width: 0;
				background-color: red;
				transition: 300ms ease all;
			}
		}

		&__button{
			width: 200px;
			padding-block: 10px;
			background-color: ${THEME.colors.white};
			text-align: center;
			color: ${THEME.colors.black};
			font-size: ${THEME.fontSize.default};
			transition: all ease 0.3s;

			:not(:disabled){
				:hover{
					border-radius: ${THEME.radius.default};
				}
			}


			&:disabled{
				background-color: ${THEME.colors.gray};
				opacity: 0.75;
			}
		}
	}

	@media only screen and (max-width: 760px)  {
		width: 100%;
  }
`

export default StyledForm