import { Container } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const Details = () => {
	const classes = useDetailsSytles();

	return (
		<div className={classes.wrapper}>
			<Container>DETAILS</Container>
		</div>
	);
};

export default Details;

const useDetailsSytles = makeStyles((theme: Theme) => ({
	wrapper: {
		backgroundColor: '#EEE',
		padding: 50
	}
}));
