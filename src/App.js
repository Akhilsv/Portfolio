import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Home from './Pages/Home';
import Menu from './components/Menu';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './Pages/About';
import Skills from './Pages/Skills';
import { useState } from 'react';
import { darkTheme, lightTheme } from './Theme';
import { Nav } from './components/Nav/Nav';

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
		duration: 0.5,
	};

	const themeHandler = () => {
		setIsDarkMode(!isDarkMode);
		console.log('clicked');
	};
	return (
		<>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<Body>
					<Menu />
					<OutLine>
						<Nav click={themeHandler} theme={isDarkMode} />

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
									<Redirect to='/home' />
								</Route>
							</Switch>
						</AnimatePresence>
					</OutLine>
				</Body>
			</ThemeProvider>
		</>
	);
}

const Body = styled.div`
	background-color: ${(p) => p.theme.background};
	min-height: 100vh;
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
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	@media (max-width: 700px) {
		width: 100vw;
		min-height: 100vh;
		border: none;
		border-radius: 0;
		overflow: scroll;
	}
`;

export default App;
