import './App.scss';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Login from './Components/User/LoginService/Login';
import SignUp from './Components/User/SignupService/SignUp';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="/" element={<Login />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
			</Route>,
		),
	);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
