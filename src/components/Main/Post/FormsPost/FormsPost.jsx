import React, { useState } from 'react';
import Button from '../../../UI/Buttons/Button';
import RadioForm from '../../../UI/Forms/RadioForm/RadioForm';
import SelectSmallForm from '../../../UI/Forms/SelectSmallForm/SelectSmallForm';
import TextareaForm from '../../../UI/Forms/TextareaForm/TextareaForm';
import UploadBlock from '../../../UI/UploadBlock/UploadBlock';
import './FormsPost.scss';


const FormsPost = ({ style, privacy }) => {

	const [privacyValue, setPrivacyValue] = useState('public');
	const textareaStyle = { height: '96px', margin: '0 0 22px' }
	const uploadStyle = { maxWidth: '637px', width: '100%' }

	let radioList = privacy.list.map(el => (
		<RadioForm
			name={privacy.title}
			value={el.value}
			title={el.title}
			checked={privacyValue}
			setChecked={setPrivacyValue}
		/>
	))

	return (
		<div className='form-post' style={style ? style : {}}>
			<TextareaForm
				ph='Comment here...'
				style={textareaStyle}
			/>
			<div className="form-post__upload">
				<UploadBlock style={uploadStyle} />
				<div className="form-post__upload-right">
					<div className="form-post__radios">
						{radioList}
					</div>
					<Button>Comment</Button>
				</div>
			</div>
			<SelectSmallForm sortList={['Trending', 'Trending 2', 'Trending 3']}/>
		</div>
	)
}

export default FormsPost;