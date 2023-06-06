import React, { useRef, useState } from "react";
import { LikeIcon } from "../../../../../UI/SVGIcons/SVGIcons";
import './LikeRoadmapWS.scss';

const LikeRoadmapWS = ({ amount, style }) => {

	const [amountValue, setAmountValue] = useState(Number(amount));
	const ref = useRef(null);

	const onLikeClickHandler = e => {
		if (amountValue <= amount) {
			setAmountValue(amountValue + 1);
			ref.current.classList.add('active');
		} else {
			setAmountValue(amountValue - 1);
			ref.current.classList.remove('active');
		}

	}



	return (
		<div ref={ref}
			style={style ? style : {}}
			className="like-block"
			onClick={e => { onLikeClickHandler(e) }}
		>
			<LikeIcon />
			<span >{amountValue}</span>
		</div>
	)
}

export default LikeRoadmapWS;