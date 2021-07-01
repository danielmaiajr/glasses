import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

interface Proptypes {
	numberOfDots: number;
	index: number;
	OnClick: (i: number) => void;
}

const Dots = ({ numberOfDots, index, OnClick }: Proptypes): JSX.Element => {
	const classes = useDotsStyles();

	return (
		<div className={classes.dotWrapper}>
			{[ ...Array(numberOfDots) ].map((_, i) => {
				return i === index ? (
					<button className={clsx(classes.dot, classes.dotSelect)} key={i} />
				) : (
					<button className={classes.dot} key={i} onClick={() => OnClick(i)} />
				);
			})}
		</div>
	);
};

export default Dots;

const useDotsStyles = makeStyles({
	dotWrapper: {
		display: 'flex',
		margin: 10
	},
	dot: {
		padding: 2,
		margin: 2,
		borderRadius: '50%',
		border: '1px solid #CCC',
		backgroundColor: '#FFF',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	dotSelect: {
		border: '1px solid #555',
		backgroundColor: '#555'
	}
});
