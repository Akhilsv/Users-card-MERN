import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Profile = () => {
	const [data, setData] = useState('');
	const params = useParams();
	useEffect(() => {
		axios
			.get(`https://users-card.herokuapp.com/${params.uid}`)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, [params.uid]);
	console.log(data);
	return (
		<>
			{data && (
				<ProfileHolder>
					<Header>
						<img
							src={
								data[0].gender === 'male' ? '/assets/man.png' : '/assets/woman.png'
							}
							alt='people'
						/>
						<p>
							{data[0].firstName} {data[0].lastName}
						</p>
					</Header>
					<DetailsHolder>
						<p>FirstName : {data[0].firstName} </p>
						<p>LastName : {data[0].lastName} </p>
						<p>Age : {data[0].age} </p>
						<p>Gender : {data[0].gender} </p>
						<p>Nationality : {data[0].nationality} </p>
					</DetailsHolder>
				</ProfileHolder>
			)}
		</>
	);
};
const ProfileHolder = styled.div`
	width: 60%;
	height: 70vh;
	margin: 20px auto;
	background: #e7e7e7d5;
	display: flex;
	padding: 20px;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	@media (max-width: 600px) {
		width: 90%;
		height: 80vh;
	}
`;
const Header = styled.div`
	width: 95%;
	height: 30%;
	background: #2525257a;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	img {
		width: 100px;
		height: 100px;
	}
	p {
		margin-left: 30%;
		font-weight: 600;
		font-size: 1.5rem;
		@media (max-width: 600px) {
			margin-left: 1%;
			font-size: 1.4rem;
		}
	}
`;
const DetailsHolder = styled.div`
	width: 95%;
	height: 50%;

	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: right;

	p {
		font-weight: 600;
		font-size: 1.2rem;
		text-transform: capitalize;
	}
`;
export default Profile;
