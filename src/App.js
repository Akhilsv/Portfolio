import styled, { keyframes, ThemeProvider } from 'styled-components';
import './App.css';
import Home from './Pages/Home';
import Menu from './components/Menu';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import About from './Pages/About';
import Skills from './Pages/Skills';
import { useState } from 'react';
import { darkTheme, lightTheme } from './Theme';
import { Toggle } from './components/styledItems/ThemeToggleBtn';
import { Logo } from './components/styledItems/Logo';

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
		duration:0.5,
	};
	const changeTheme = () => {
		setIsDarkMode(!isDarkMode);
		console.log('clicked');
	};
	return (
		<>
			<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
				<Body>
					<Toggle onClick={changeTheme}>
						<p>{isDarkMode ? <FiMoon /> : <FiSun />}</p>
					</Toggle>
	
					<Menu />
					<OutLine>
						<Logo>
							<svg
								width='53'
								height='59'
								viewBox='0 0 53 59'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M17.2266 0.273438L33.5039 58H26.4727L24.0117 48.6836H10.4062L7.98047 58H0.949219L17.2266 0.273438ZM22.3945 42.4961L18.6328 28.0469L17.1914 21.3672L15.8203 28.0469L12.0234 42.4961H22.3945Z'
									fill='black'
								/>
								<path
									d='M19.588 57.02C19.924 56.924 20.188 56.774 20.38 56.57C20.692 56.234 20.848 55.742 20.848 55.094C20.848 54.53 20.716 54.074 20.452 53.726C20.188 53.378 19.846 53.204 19.426 53.204C19.03 53.204 18.736 53.282 18.544 53.438C18.352 53.594 18.232 53.798 18.184 54.05C18.124 54.29 18.088 54.626 18.076 55.058C18.04 55.682 17.974 56.192 17.878 56.588C17.77 56.984 17.536 57.344 17.176 57.668C16.684 58.064 16.144 58.262 15.556 58.262C15.412 58.262 15.304 58.256 15.232 58.244C14.476 58.148 13.9 57.83 13.504 57.29C13.096 56.75 12.892 56.024 12.892 55.112V55.094C12.892 54.422 13.018 53.876 13.27 53.456C13.522 53.036 13.828 52.712 14.188 52.484C14.584 52.244 14.998 52.094 15.43 52.034V53.294C15.262 53.318 15.064 53.396 14.836 53.528C14.38 53.828 14.14 54.35 14.116 55.094C14.116 55.85 14.242 56.348 14.494 56.588C14.746 56.828 15.04 56.972 15.376 57.02C15.424 57.032 15.49 57.038 15.574 57.038C15.862 57.038 16.12 56.936 16.348 56.732C16.552 56.564 16.69 56.348 16.762 56.084C16.822 55.82 16.87 55.442 16.906 54.95C16.93 54.554 16.966 54.218 17.014 53.942C17.062 53.654 17.152 53.384 17.284 53.132C17.704 52.352 18.418 51.962 19.426 51.962C19.774 51.962 20.11 52.034 20.434 52.178C20.746 52.31 21.022 52.502 21.262 52.754C21.814 53.318 22.09 54.092 22.09 55.076C22.09 56.036 21.82 56.816 21.28 57.416C20.824 57.884 20.26 58.172 19.588 58.28V57.02Z'
									fill='black'
								/>
								<path
									d='M21.9688 3.21875V2.21875H20.6478L21.0063 3.49014L21.9688 3.21875ZM28.2188 3.21875L29.187 2.96873L28.9933 2.21875H28.2188V3.21875ZM35.0938 29.8438L36.0704 29.629L36.0665 29.6113L36.062 29.5937L35.0938 29.8438ZM36.4062 35.8125L35.4296 36.0273L37.3807 36.037L36.4062 35.8125ZM37.7812 29.8438L36.813 29.5937L36.8097 29.6065L36.8068 29.6193L37.7812 29.8438ZM44.6562 3.21875V2.21875H43.8817L43.688 2.96873L44.6562 3.21875ZM50.9062 3.21875L51.8687 3.49014L52.2272 2.21875H50.9062V3.21875ZM36.4375 54.5312L35.475 54.8026L36.4375 58.216L37.4 54.8026L36.4375 54.5312ZM21.9688 4.21875H28.2188V2.21875H21.9688V4.21875ZM27.2505 3.46877L34.1255 30.0938L36.062 29.5937L29.187 2.96873L27.2505 3.46877ZM34.1171 30.0585L35.4296 36.0273L37.3829 35.5977L36.0704 29.629L34.1171 30.0585ZM37.3807 36.037L38.7557 30.0682L36.8068 29.6193L35.4318 35.588L37.3807 36.037ZM38.7495 30.0938L45.6245 3.46877L43.688 2.96873L36.813 29.5937L38.7495 30.0938ZM44.6562 4.21875H50.9062V2.21875H44.6562V4.21875ZM49.9438 2.94736L35.475 54.2599L37.4 54.8026L51.8687 3.49014L49.9438 2.94736ZM37.4 54.2599L22.9312 2.94736L21.0063 3.49014L35.475 54.8026L37.4 54.2599Z'
									fill='black'
								/>
							</svg>
						</Logo>
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
	@media (max-width: 700px) {
		width: 100vw;
		min-height: 100vh;
		border: none;
	}
`;

export default App;
