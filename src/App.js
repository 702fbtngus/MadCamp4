import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header'
import Contents from './components/Contents'
import Login from './components/Login'

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background:
  /* linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ), */
	url("https://i.imgur.com/gxVnhA8.jpg");
  background-size: cover;
`;



function App() {
	return (
		<Container>
			<div className="App">
				<Login />
			</div>
		</Container>
	);
}

export default App;
