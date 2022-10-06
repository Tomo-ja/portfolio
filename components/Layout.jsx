import { Component } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Header/index";

import theme from "../styles/theme";

class Layout extends Component {
	render() {
			const { children } = this.props
			return (
				<ThemeProvider theme={theme}>
					<Header />
					{children}
				</ThemeProvider>
			)
	}
}

export default Layout