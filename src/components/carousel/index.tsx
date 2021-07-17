import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useWindowSize } from 'react-use';

import { makeStyles } from '@material-ui/core/styles';

import { IconButton } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { useSpring, useSprings, animated, config } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';

import Dots from './dots';

import { clamp, ItemSlidesToShow, BreakpointTypes } from './_utils';

interface PropTypes {
	breakPoints?: BreakpointTypes[];
	initialIndex?: number;
	showDots?: boolean;
	isInfinite?: boolean;
	children: JSX.Element[];
}

interface UseCarouselStylesProps {
	numberOfIndexs: number;
	numberOfItemSlides: number;
}

//---------------------------------------
//Needs number of slides with relation to the width size
//Needs to Fix Type - any on component

const Carousel = ({
	breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 850, itemsToShow: 3 },
		{ width: 1150, itemsToShow: 3 },
		{ width: 1450, itemsToShow: 3 },
		{ width: 1750, itemsToShow: 3 }
	],
	initialIndex = 0,
	showDots = false,
	isInfinite = true,
	children
}: PropTypes): JSX.Element => {
	const { width: windowsWidth } = useWindowSize();

	const numberOfItemSlides: number = ItemSlidesToShow(breakPoints, windowsWidth);
	const numberOfIndexs: number = children.length;
	const numberOfSlides: number = Math.ceil(numberOfIndexs / numberOfItemSlides);

	const index = useRef<number>(0);
	const carouselWidth = useRef<any>();

	const [ indexState, setIndexState ] = useState<number>(0);

	const classes = useCarouselStyles({ numberOfIndexs, numberOfItemSlides });

	const [ styles, spring ] = useSpring(() => ({ x: 0, config: config.stiff }));
	const [ newStyles, newSpring ] = useSprings(numberOfIndexs, () => ({
		scale: 1,
		opacity: 1,
		config: config.default
	}));

	/* useEffect(()=>{
		if (isInfinite) {
			const timer = setInterval(() => {
				indexState
			}, 5000);
			return () => clearInterval(timer);
		}
	},[]) */

	//-------------------------------------------------
	//Utility function SETINDEX AND ANIMATION
	const SetCurrentIndex = useCallback(
		(xDir: number): void => {
			setIndexState(clamp(index.current + xDir, 0, numberOfSlides - 1));
			index.current = clamp(index.current + xDir, 0, numberOfSlides - 1);
		},
		[ numberOfSlides ]
	);

	const AnimateXPosition = useCallback(
		(dragMode: boolean = false, dragXOffset?: any): void => {
			spring.start({
				x:
					-index.current * (carouselWidth.current ? carouselWidth.current.clientWidth : 0) +
					(dragMode ? dragXOffset : 0)
			});
		},
		[ spring ]
	);

	//-------------------------------------------------
	//Function events ONCLICK AND DRAG
	const OnClick = useCallback(
		(xDir: number): void => {
			SetCurrentIndex(xDir);
			AnimateXPosition();
		},
		[ AnimateXPosition, SetCurrentIndex ]
	);

	const OnDotClick = useCallback(
		(i: number): void => {
			setIndexState(clamp(i, 0, numberOfSlides - 1));
			index.current = clamp(i, 0, numberOfSlides - 1);
			AnimateXPosition();
		},
		[ AnimateXPosition, numberOfSlides ]
	);

	const OnDrag = useDrag(
		({ event, active, args: [ index ], movement: [ mx ], direction: [ xDir ], distance: [ xDist ], tap }) => {
			if (!active && xDist > 10) SetCurrentIndex(-xDir);
			AnimateXPosition(active, mx);

			newSpring.start((i) => {
				if (!active) return { scale: 1, opacity: 1 };
				return { scale: active && i === index ? 1.1 : 1, opacity: active && i !== index ? 0.5 : 1 };
			});
		},
		{ axis: 'x', filterTaps: true }
	);

	useEffect(() => OnDotClick(initialIndex), [ initialIndex, OnDotClick ]);
	console.log('carousel rendered...');

	//-------------------------------------------------
	//RETURN

	return (
		<div className={classes.wrapper}>
			<div className={classes.sliderWrapper}>
				<animated.div className={classes.slider} style={styles} ref={carouselWidth}>
					{newStyles.map((styles, i) => (
						<animated.div
							style={styles}
							key={i}
							className={classes.slide}
							{...OnDrag(i)}
							onDragStart={(e) => e.preventDefault()}
						>
							{children[i]}
						</animated.div>
					))}
				</animated.div>

				{showDots ? (
					<React.Fragment>
						<IconButton
							className={classes.minusButton}
							size="small"
							disableRipple
							onClick={() => OnClick(-1)}
						>
							<ChevronLeftIcon />
						</IconButton>
						<IconButton
							className={classes.plusButton}
							size="small"
							disableRipple
							onClick={() => OnClick(1)}
						>
							<ChevronRightIcon />
						</IconButton>
					</React.Fragment>
				) : null}
			</div>

			<Dots numberOfDots={numberOfSlides} index={indexState} OnClick={OnDotClick} />
		</div>
	);
};

export default Carousel;

const useCarouselStyles = makeStyles({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: '20px 0',
		width: '100%',
		height: '100%'
	},
	sliderWrapper: {
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		position: 'relative'
	},
	slider: {
		display: 'grid',
		gridTemplateColumns: (props: UseCarouselStylesProps) =>
			`repeat(${props.numberOfIndexs}, calc(100% / ${props.numberOfItemSlides}))`
	},
	slide: {
		display: 'flex',
		justifyContent: 'center',
		padding: '0 10px',
		touchAction: 'pan-y'
	},
	minusButton: {
		position: 'absolute',
		top: 'calc(50% - 16px)',
		left: 0,
		backgroundColor: '#FFF',
		border: '1px solid #CCC'
	},
	plusButton: {
		position: 'absolute',
		top: 'calc(50% - 16px)',
		right: 0,
		backgroundColor: '#FFF',
		border: '1px solid #CCC'
	}
});
