import { Component } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Header/index";
import Footer from "./Footer";

import theme from "../styles/theme";

class Layout extends Component {
	render() {
			const { children } = this.props
			return (
				<>
					<Header />
					{children}
					<Footer />
				</>
			)
	}
}

export default Layout