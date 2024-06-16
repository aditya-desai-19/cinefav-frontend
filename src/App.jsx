//@ts-check
import React, { useCallback, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'
import { signIn } from './redux/slices/userSlice.js'
import { Toaster } from 'react-hot-toast';

const App = () => {
	const dispatch = useDispatch();

	const updateUser = useCallback((user) => {
		try {
			if (user && user.length) {
				dispatch(signIn(JSON.parse(user)));
			}			
		} catch (error) {
			console.log(error);
		}
	}, []);

	useEffect(() => {
		const user = Cookies.get('user');
		updateUser(user);
	}, []);

	return (
		<div className='bg-blackbg'>
			<Navbar />
			<Outlet />
			<Toaster />
		</div>
	)
}

export default App
