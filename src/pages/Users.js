import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { LoadHolder, Loading } from '../components/Loading';
const Users = () => {
	const [data, setData] = useState('');
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		axios
			.get('https://users-card.herokuapp.com/users')
			.then((res) => {
				setData(res.data);
				setLoading(!loading);
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<>
			{loading && (
				<LoadHolder>
					<Loading />
				</LoadHolder>
			)}
			{!loading && (
				<CardsHolder>
					{data &&
						data.map((i) => {
							return <Card key={i._id} data={i} />;
						})}
				</CardsHolder>
			)}
		</>
	);
};
const CardsHolder = styled.div`
	min-height: 89vh;
	margin: auto;
	width: 80%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-gap: 10px;
	padding: 10px;
	place-items: center;
	overflow-x: hidden;
`;

export default Users;
