import React from 'react';

import { Container, Grid, Theme, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<Container className={classes.container}>
				<Grid container spacing={4}>
					<Grid item xs={6} sm={4} md={3}>
						<Typography variant="h5">Figma</Typography>
						<div className={classes.iconContainer}>
							<div className={classes.icon}>
								<TwitterIcon fontSize="small" />
							</div>
							<Typography variant="h6">Twitter</Typography>
						</div>
						<div className={classes.iconContainer}>
							<div className={classes.icon}>
								<YouTubeIcon fontSize="small" />
							</div>
							<Typography variant="h6">YouTube</Typography>
						</div>
						<div className={classes.iconContainer}>
							<div className={classes.icon}>
								<InstagramIcon fontSize="small" />
							</div>
							<Typography variant="h6">Instagram</Typography>
						</div>
						<div className={classes.iconContainer}>
							<div className={classes.icon}>
								<FacebookIcon fontSize="small" />
							</div>
							<Typography variant="h6">Facebook</Typography>
						</div>
						<Typography variant="h6">Manage Cookies</Typography>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Typography variant="h5">Use Cases</Typography>
						<Typography variant="h6">UI design</Typography>
						<Typography variant="h6">UX design</Typography>
						<Typography variant="h6">Graphic design</Typography>
						<Typography variant="h6">Wireframing</Typography>
						<Typography variant="h6">Diagramming</Typography>
						<Typography variant="h6">Brainstorming</Typography>
						<Typography variant="h6">Templates</Typography>
						<Typography variant="h6">Remote design</Typography>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Typography variant="h5">Resources</Typography>
						<Typography variant="h6">Blog</Typography>
						<Typography variant="h6">Best practices</Typography>
						<Typography variant="h6">Support</Typography>
						<Typography variant="h6">Developers</Typography>
						<Typography variant="h6">Learn design</Typography>
						<Typography variant="h6">Downloads</Typography>
						<Typography variant="h6">What's new</Typography>
						<Typography variant="h6">Releases</Typography>
						<Typography variant="h6">Careers</Typography>
						<Typography variant="h6">About us</Typography>
					</Grid>
					<Grid item xs={6} sm={4} md={3}>
						<Typography variant="h5">Compare</Typography>
						<Typography variant="h6">Sketch</Typography>
						<Typography variant="h6">Adobe XD</Typography>
						<Typography variant="h6">Invision Studio</Typography>
						<Typography variant="h6">Framer</Typography>
						<Typography variant="h6">Design on Windows</Typography>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default Footer;

const useStyles = makeStyles((theme: Theme) => ({
	wrapper: {
		marginTop: 25,
		padding: '25px 0',
		backgroundColor: '#000',
		[theme.breakpoints.down('sm')]: {
			marginBottom: 54
		}
	},
	container: {
		color: '#FFF'
	},
	iconContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		marginRight: 10
	}
}));
