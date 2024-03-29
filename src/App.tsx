import { useState } from 'react';
import './App.scss';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Login from './Components/User/Login';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="*" element={<Login />}></Route>
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
