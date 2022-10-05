import { Component } from "react";
import Header from "./Header/index";

class Layout extends Component {
	render() {
			const { children } = this.props
			return (
				<>
					<Header />
					{children}
				</>
			)
	}
}

export default Layout