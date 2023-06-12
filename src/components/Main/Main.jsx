import React from "react";
import { Route, Routes } from "react-router-dom";
import './Main.scss';

const Workspace = React.lazy(() => import('./Workspace/Workspace.jsx'));
const Board = React.lazy(() => import('./Board/Board.jsx'));
const Post = React.lazy(() => import('./Post/Post.jsx'));
const Changelog = React.lazy(() => import('./Changelog/Changelog.jsx'));
const Forms = React.lazy(() => import('./Form/Form.jsx'));
const PageNotFound = React.lazy(() => import('./PageNotFound/PageNotFound.jsx'));

const Main = () => {
	return (
		<main className='main'>
			<div className='container'>
				<React.Suspense fallback={<div>Loading</div>}>
					<Routes>
						<Route path='/' element={<Workspace />} />
						<Route path='/board' element={<Board />} />
						<Route path='/post' element={<Post />} />
						<Route path='/changelog' element={<Changelog />} />
						<Route path='/form/*' element={<Forms />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</React.Suspense>
			</div>
		</main>
	)
}

export default Main;