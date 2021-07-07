import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

export interface routesType {
	path: string;
	name: string;
	icon: JSX.Element;
}

interface PropTypes {
	routes: routesType[];
}

const BottomNav = ({ routes }: PropTypes): JSX.Element => {
	const classes = useStyles();

	return (
		<div className={classes.tabWrapper}>
			{routes.map((route, i) => (
				<NavLink className={classes.tab} activeClassName={classes.activeTab} exact to={route.path} key={i}>
					{route.icon}
					<div className={classes.label}>{route.name}</div>
				</NavLink>
			))}
		</div>
	);
};

export default BottomNav;

const useStyles = makeStyles((theme: Theme) => ({
	tabWrapper: {
		position: 'fixed',
		bottom: 0,
		left: 0,
		width: '100%',
		height: 55,
		display: 'none',
		padding: 5,
		backgroundColor: '#000',
		zIndex: 1000,
		[theme.breakpoints.down('sm')]: {
			display: 'flex'
		}
	},
	tab: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		color: '#555'
	},
	activeTab: {
		color: '#FFF',
		fontWeight: 'bold'
	},
	label: {
		fontSize: 11,
		padding: 2
	}
}));
