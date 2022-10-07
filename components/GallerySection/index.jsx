import { useState } from "react";

import StyledGallerySection from "./gallerySection.styles";
import StyledGalleryItem from "./galleryItem.styles";
import THEME from "../../styles/theme";


const GallerySection = () => {

	const [isZoom, setIsZoom] = useState(false)


	return (
		<StyledGallerySection
			className={isZoom ? 'zoomIn' : 'zoomOut'}
			onClick={() => setIsZoom(prev => !prev)}
		>

			<StyledGalleryItem bgColor={THEME.colors.lightRed} className={'leftSide'}>

			</StyledGalleryItem>
			<StyledGalleryItem bgColor={THEME.colors.yellow} className={'center'}>

			</StyledGalleryItem>
			<StyledGalleryItem bgColor={THEME.colors.blue} className={'rightSide'}>

			</StyledGalleryItem>

		</StyledGallerySection>
	)
}

export default GallerySection