import styled, { keyframes, ThemeProvider } from 'styled-components';
import './App.css';
import Home from './Pages/Home';
import Menu from './components/Menu';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';

import About from './Pages/About';
import Skills from './Pages/Skills';
import { useState } from 'react';
import { darkTheme, lightTheme } from './Theme';

function App() {
	const location = useLocation();

	const pageVarient = {
		initial: {
			opacity: 0,
			x: '100vw',
		},
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: '-100vw',
		},
	};
	const [isDarkMode, setIsDarkMode] = useState(true);
	const pageTransition = {
		type: 'spring',
		stiffness: 200,
	};
	const changeTheme = () => {
		setIsDarkMode(!isDarkMode);
		console.log('clicked');
	};
	return (
		<>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<Body>
					{' '}
					{/* <Nav /> */}
					<Toggle onClick={changeTheme}>
						<p>{isDarkMode ? <FiMoon /> : <FiSun />}</p>
					</Toggle>
					<Menu />
					<OutLine>
						<AnimatePresence>
							<Switch>
								<Route exact path='/home'>
									<Home framer={pageVarient} transition={pageTransition} />
								</Route>
								<Route exact path='/about'>
									<About framer={pageVarient} transition={pageTransition} />
								</Route>
								<Route exact path='/skills'>
									<Skills framer={pageVarient} transition={pageTransition} />
								</Route>
								<Route exact path='*'>
									<Home />
								</Route>
							</Switch>
						</AnimatePresence>
					</OutLine>
				</Body>
			</ThemeProvider>
		</>
	);
}
const iconAnimation = keyframes`
from{
	transform: rotate(0deg);
}
to{
	transform: rotate(360deg);
}
`;
const Body = styled.div`
	background-color: ${(p) => p.theme.background};
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const OutLine = styled.div`
	position: relative;
	overflow: hidden;
	width: 95vw;
	background-color: ${(p) => p.theme.background};
	height: 95vh;
	border: solid 3px;
	border-color: ${(p) => p.theme.border};
	border-radius: 50px;
	transition: background-color 1s;
	transition: all 0.5s ease;
	@media (max-width: 700px) {
		width: 100vw;
		height: 100vh;
		border: none;
	}
`;
const Toggle = styled.div`
	user-select: none;
	cursor: pointer;
	position: absolute;
	top: 8%;
	left: 5%;
	width: 60px;
	height: 60px;
	border-radius: 50%;
	border: solid 3px ${(p) => p.theme.border};
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	& svg {
		color: ${(p) => p.theme.color};
		font-size: 1.7rem;
		transition: all 0.5s;
		animation: ${iconAnimation} 1s ease-in-out;
		&:hover {
			transform: rotate(360deg);
		}
	}
	@media (max-width: 700px) {
		top: 2%;
		left: 83%;
		width: 50px;
		height: 50px;
	}
`;
export default App;
