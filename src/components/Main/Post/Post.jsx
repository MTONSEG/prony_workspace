import React, { useState } from 'react';
import './Post.scss';
import { postScreen } from '../../../store';
import VotersPost from './VotersPost/VotersPost';
import BodyPost from './BodyPost/BodyPost';
import FormsPost from './FormsPost/FormsPost';


const Post = props => {
	let [state, setState] = useState(postScreen);

	return (
		<div className='post'>
			<VotersPost state={state.voters} style={{ margin: '0 0 25px' }} />
			<BodyPost state={state.post} style={{ margin: '0 0 29px' }} />
			<FormsPost privacy={state.privacy} />
		</div>
	)
}

export default Post;