export const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

export interface BreakpointTypes {
	width: number;
	itemsToShow: number;
}

export const ItemSlidesToShow = (breakPoints: BreakpointTypes[], width: number) => {
	const slides = breakPoints.filter((s) => s.width < width);
	return slides[slides.length - 1].itemsToShow;
};
