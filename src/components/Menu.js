import React from 'react';
import { GoHome } from 'react-icons/go';
import { BsPerson, BsGear, BsEye } from 'react-icons/bs';
import { BiMessageSquareDetail } from 'react-icons/bi';
import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<>
			<MenuHolder>
				<li>
					<NavLinks activeClassName='selected' to='/home' name='Home'>
						<GoHome />
					</NavLinks>
				</li>

				<li>
					<NavLinks activeClassName='selected' to='/about' name='About'>
						<BsPerson />
					</NavLinks>
				</li>
				<li>
					<NavLinks activeClassName='selected' to='/skills' name='Skills'>
						<BsGear />
					</NavLinks>
				</li>
				<li>
					<NavLinks to='/home' name='Work'>
						<BsEye />
					</NavLinks>
				</li>
				<li>
					<NavLinks to='/home' name='Contact'>
						<BiMessageSquareDetail />
					</NavLinks>
				</li>
			</MenuHolder>
		</>
	);
};

const MenuHolder = styled.ul`
	user-select: none;
	z-index: 100;
	background-color: ${(p) => p.theme.color};
	font-size: 1.5rem;
	width: 50px;
	position: absolute;
	right: 0.6%;
	height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	border-radius: 20px;
	transition: all 0.5s;
	@media (max-width: 700px) {
		position: fixed;
		margin-right: 0;
		border-radius: 0;
		bottom: 0;
		left: 0;
		flex-direction: row;
		width: 100vw;
		height: 50px;
	}
	& a {
		text-decoration: none;
		color: ${(p) => p.theme.background};
	}
	& li {
		text-decoration: none;
		font-weight: 900;

		&:hover {
			
			color: red;
		}
	}
`;
const NavLinks = styled(NavLink)`
	font-size: 1.8rem;
	font-weight: 800;
	text-decoration: none;
	color: #919191e6;
	position: relative;
	cursor: pointer;
	transition: color 0.5s ease;
	@media (max-width: 700px) {
		&::after {
			font-family: 'Raleway', sans-serif;
			width: max-content;
			font-weight: 600;
			letter-spacing: 1px;
			content: '${(prop) => prop.name}';
			position: absolute;
			font-size: 0.6rem;
			bottom: -11px;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	&.selected {
		color: #777;
		opacity: 0.7;
	}
`;
export default Menu;
