import { Route, Switch } from 'react-router-dom';
import Register from './pages/Register';
import Users from './pages/Users';
import Nav from './components/Nav';
import Profile from './pages/Profile';

const App = () => {
	return (
		<>
			<Nav />
			<Switch>
				<Route exact path='/users'>
					<Users />
				</Route>
				<Route exact path='/register'>
					<Register />
				</Route>
				<Route exact path='/users/:uid'>
					<Profile />
				</Route>
				<Route exact path='*'>
					<Users />
				</Route>
			</Switch>
		</>
	);
};

export default App;
