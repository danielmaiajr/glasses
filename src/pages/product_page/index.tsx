import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

import Navbar from '../../components/navbar';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';

const ProductPage = (): JSX.Element => {
	const classes = useStyles();

	const { id } = useParams<{ id: string }>();
	return (
		<div>
			<Navbar />
			<Container>product: {id}</Container>
		</div>
	);
};

export default ProductPage;

const useStyles = makeStyles((theme: Theme) => ({}));
