import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUsers, FaAddressCard } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = () => {
	return (
		<NavBAr>
			<h1>Webquark</h1>
			<ul>
				<li>
					<NavLink to='/users' activeClassName='active'>
						<FaUsers />
						<p>Users</p>
					</NavLink>
				</li>
				<li>
					<NavLink to='/register' activeClassName='active'>
						<FaAddressCard />
						<p>Register</p>
					</NavLink>
				</li>
			</ul>
		</NavBAr>
	);
};
const NavBAr = styled.div`
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #030303;
	color: #eeeded;
	padding: 10px 30px;
	@media (max-width: 600px) {
		padding: 10px 10px 10px 20px;
	}
	h1 {
		font-family: 'Work Sans', sans-serif;
		@media (max-width: 600px) {
			font-size: 1.5rem;
		}
	}
	ul {
		width: 40%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		@media (max-width: 600px) {
			width: 50%;
		}
	}
	li {
		list-style: none;
		font-size: 1.3rem;
	}
	a {
		text-decoration: none;
		font-size: 1.2rem;
		font-weight: 500;
		color: #eeeded;
		width: 130px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.3rem;
		@media (max-width: 550px) {
			justify-content: center;
			font-size: 1.5rem;
			width: 40px;
		}
	}
	p {
		width: 100px;
		@media (max-width: 550px) {
			display: none;
		}
	}
	& .active {
		opacity: 0.5;
	}
`;

export default Nav;
