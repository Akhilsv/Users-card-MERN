import React from 'react';
import styled from 'styled-components';
import { GrView } from 'react-icons/gr';
import { useHistory } from 'react-router-dom';

export const Card = ({ data }) => {
	const history = useHistory();
	const gotoHandler = () => {
		history.push(`/users/${data._id}`);
	};
	return (
		<CardHolder>
			<img
				src={data.gender === 'male' ? 'assets/man.png' : 'assets/woman.png'}
				alt='people'
			/>
			<h1>
				{data.firstName} {data.lastName}
			</h1>
			<View onClick={gotoHandler} />
		</CardHolder>
	);
};
const CardHolder = styled.div`
	cursor: pointer;
	width: 250px;
	height: 250px;
	border-radius: 10px;
	padding: 5px;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
	background-color: #80a6f8;
	position: relative;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	h1 {
		font-size: 1.3rem;
		font-weight: 600;
		text-transform: capitalize;
	}
	img {
		width: 150px;
		height: 150px;
	}
`;
const View = styled(GrView)`
	position: absolute;
	top: 10%;
	right: 10%;
`;
