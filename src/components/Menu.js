import React from 'react';
import { GoHome } from 'react-icons/go';
import { BsPerson, BsGear, BsEye } from 'react-icons/bs';
import { BiMessageSquareDetail } from 'react-icons/bi';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Menu = () => {
	return (
		<>
			<MenuHolder>
				<li>
					<NavLinks activeClassName='selected' to='/home'>
						<GoHome />
					</NavLinks>
				</li>

				<li>
					<NavLinks activeClassName='selected' to='/about'>
						<BsPerson />
					</NavLinks>
				</li>
				<li>
					<NavLinks activeClassName='selected' to='/skills'>
						<BsGear />
					</NavLinks>
				</li>
				<li>
					<NavLinks  to='/home'>
						<BsEye />
					</NavLinks>
				</li>
				<li>
					<NavLinks to='/home'>
						<BiMessageSquareDetail />
					</NavLinks>
				</li>
			</MenuHolder>
		</>
	);
};

const MenuHolder = styled.ul`
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
	text-decoration: none;
	color: white;
	font-size: 1.5rem;
	transition: all 0.4s;

	&.selected {
		color: #f151ff;
		opacity: 0.7;
	}
`;
export default Menu;
