import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Register = () => {
	const histroy = useHistory();
	const [message, setMessage] = useState('');
	const firstnameRef = useRef('');
	const lastNameRef = useRef('');
	const genderRef = useRef('');
	const ageRef = useRef('');
	const nationalityRef = useRef('');
	const sumbitHandler = (e) => {
		e.preventDefault();
		const firstName = firstnameRef.current.value;
		const lastName = lastNameRef.current.value;
		const gender = genderRef.current.value;
		const age = ageRef.current.value;
		const nationality = nationalityRef.current.value;

		axios
			.post('https://users-card.herokuapp.com/register', {
				firstName,
				lastName,
				age,
				gender,
				nationality,
			})
			.then((res) => {
				setMessage(res.data);
				histroy.push('/users');
			})
			.catch((err) => console.log(err.response.data.data));
	};
	return (
		<>
			{message && <p>{message}</p>}
			<FormHolder>
				<form onSubmit={sumbitHandler}>
					<input
						type='text'
						name='firstName'
						placeholder='First Name'
						ref={firstnameRef}
						required
						autoComplete='off'
					/>
					<input
						type='text'
						name='lastName'
						placeholder='Last Name'
						ref={lastNameRef}
						required
						autoComplete='off'
					/>

					<select
						name='gender'
						placeholder='Gender'
						ref={genderRef}
						autoComplete='off'>
						<option value='' disabled selected id='gender'>
							Select gender
						</option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</select>
					<input
						type='number'
						name='age'
						placeholder='Age'
						ref={ageRef}
						required
						autoComplete='off'
					/>

					<input
						type='text'
						name='nationality'
						placeholder='Nationality'
						ref={nationalityRef}
						required
						autoComplete='off'
					/>
					<button type='submit'>Register</button>
				</form>
			</FormHolder>
		</>
	);
};

const FormHolder = styled.div`
	margin: auto;
	width: 80%;
	height: 89vh;
	display: flex;
	align-items: center;
	justify-content: center;
	form {
		width: 100%;
		height: 80%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: space-around;
	}
	input,
	select {
		width: 50%;
		height: 40px;
		padding: 2px 20px;
		font-size: 1rem;
		font-weight: 600;
		letter-spacing: 2px;
		@media (max-width: 800px) {
			width: 100%;
		}
	}
	button {
		width: 30%;
		height: 40px;
		border: none;
		outline: none;
		background: #080808;
		border-radius: 5px;
		color: #f5f3f3;
		font-size: 1rem;
		font-weight: 600;
	}
	#gender {
		opacity: 0.7;
	}
`;
export default Register;
