import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTransition, animated } from '@react-spring/web';
import { useWindowSize } from 'react-use';

const CART_WIDTH: number = 500;
//const MIN_MIDIA_QUERY: number = 850;

interface PropTypes {
	ltr?: boolean;
	show: boolean;
	onBackDropClick: React.MouseEventHandler;
	children: React.ReactNode;
}

const Drawer = ({ show, onBackDropClick, children, ltr = false }: PropTypes): JSX.Element => {
	const { width } = useWindowSize();

	const classes = useStyles();

	const transtions = useTransition(show, {
		from: { x: ltr ? -CART_WIDTH : CART_WIDTH, opacity: 0 },
		enter: { x: 0, opacity: 1 },
		leave: { x: ltr ? -CART_WIDTH : CART_WIDTH, opacity: 0 },
		reverse: show
	});

	return transtions(
		({ x, opacity }, item) =>
			item && (
				<div className={classes.wrapper} style={{ pointerEvents: show ? 'auto' : 'none' }}>
					<animated.div style={{ opacity }} className={classes.backDrop} onClick={onBackDropClick} />
					<animated.div style={{ x, left: ltr ? 0 : width - CART_WIDTH }} className={classes.drawer}>
						{children}
					</animated.div>
				</div>
			)
	);
};

export default Drawer;

const useStyles = makeStyles({
	wrapper: {
		position: 'fixed',
		inset: 0,
		overflow: 'hidden',
		zIndex: 1001
	},
	backDrop: {
		height: '100%',
		width: '100%',
		background: 'rgba(238,238,238,.7)'
	},
	drawer: {
		position: 'fixed',
		top: 0,
		maxWidth: CART_WIDTH,
		width: '85%',
		height: '100vh',
		backgroundColor: '#FFF',
		boxShadow: '0 5px 20px -5px rgb(0 0 0 / 7%);'
	}
});
