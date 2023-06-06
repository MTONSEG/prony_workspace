import React from "react";
import { Route, Routes } from "react-router-dom";
import './Main.scss';

const Workspace = React.lazy(() => import('./Workspace/Workspace.jsx'));
const Board = React.lazy(() => import('./Board/Board.jsx'));
const Post = React.lazy(() => import('./Post/Post.jsx'));

const Main = () => {
	return (
		<main className='main'>
			<div className='container'>
				<React.Suspense fallback={<div>Loading</div>}>
					<Routes>
						<Route path='/' element={<Workspace />} />
						<Route path='/board' element={<Board />} />
						<Route path='/post' element={<Post />} />
					</Routes>
				</React.Suspense>
			</div>
		</main>
	)
}

export default Main;