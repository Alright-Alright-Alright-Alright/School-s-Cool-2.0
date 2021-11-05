import React from "react";
import PropTypes from "prop-types";

const icons = {
	add: "<circle cx=\"12\" cy=\"12\" r=\"10.7\" stroke=\"var(--color-counter)\" fill=\"var(--color-bg)\"/><path d=\"M12 6V18\" stroke=\"var(--color-content)\" stroke-linecap=\"round\"/><path d=\"M6 12H18\" stroke=\"var(--color-content)\" stroke-linecap=\"round\"/>",
	collapse:
    "<path d=\"M3 13L13 3L23 13\" stroke=\"currentColor\" fill=\"transparent\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
	expand:
    "<path d=\"M3 3L13 13L23 3\" stroke=\"currentColor\" fill=\"transparent\" stroke-width=\"2\" stroke-miterlimit=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>",
	follow:
    "<circle cx=\"12\" cy=\"12\" r=\"10.7\" stroke=\"var(--color-counter)\" fill=\"var(--color-bg)\" /><path d=\"M6 12L10.5 17L17.5 8.5\" stroke=\"var(--color-content)\" fill=\"var(--color-bg)\" stroke-linecap=\"round\"/>",
	seemore:
    "<ellipse cx=\"2.5\" cy=\"14.5\" rx=\"1.49999\" ry=\"1.5\" transform=\"rotate(-90 2.5 14.5)\" fill=\"currentColor\"/><ellipse cx=\"2.5\" cy=\"8.49997\" rx=\"1.5\" ry=\"1.5\" transform=\"rotate(-90 2.5 8.49997)\" fill=\"currentColor\"/><ellipse cx=\"2.5\" cy=\"2.49999\" rx=\"1.49999\" ry=\"1.5\" transform=\"rotate(-90 2.5 2.49999)\" fill=\"currentColor\"/>",
};

export default function Icon({ iconName, iconStyle, viewbox }) {
	return (
		<>
			<svg
				aria-hidden="true"
				className={`h-6 w-6 fill-current ${iconStyle}`}
				// eslint-disable-next-line
        dangerouslySetInnerHTML={{ __html: icons[iconName] }}
				viewBox={viewbox}
				xmlns="http://www.w3.org/2000/svg"
			/>
		</>
	);
}

Icon.defaultProps = {
	viewbox: "0 0 24 24",
};

Icon.propTypes = {
	iconName: PropTypes.string.isRequired,
	iconStyle: PropTypes.string.isRequired,
	viewbox: PropTypes.string,
};
