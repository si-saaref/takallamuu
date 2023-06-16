// import parse from 'html-react-parser';
// import { isHTML } from '../utils/utlis';
import {
	TbArrowBigUpFilled,
	TbArrowBigDownFilled,
	// TbShare,
	TbShare3,
} from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
// 	asyncLikeThreadActionCreator,
// 	asyncNeutralVoteThreadActionCreator,
// 	asyncUnlikeThreadActionCreator,
// } from '../states/votes/action';

export default function ThreadItem({ thread }) {
	// const { authUser } = useSelector((states) => states);
	const navigate = useNavigate();
	// const dispatch = useDispatch();

	const likedVote = 0 + thread.upVotesBy.length - thread.downVotesBy.length;

	// const likeThread = (threadId) => {
	// 	if (thread.upVotesBy.includes(authUser.id)) {
	// 		dispatch(asyncNeutralVoteThreadActionCreator({ threadId }));
	// 	} else {
	// 		dispatch(asyncLikeThreadActionCreator({ threadId }));
	// 	}
	// };

	// const unlikeThread = (threadId) => {
	// 	if (thread.downVotesBy.includes(authUser.id)) {
	// 		dispatch(asyncNeutralVoteThreadActionCreator({ threadId }));
	// 	} else {
	// 		dispatch(asyncUnlikeThreadActionCreator({ threadId }));
	// 	}
	// };

	return (
		<>
			<div className='thread-item'>
				<div className='vote-section'>
					<TbArrowBigUpFilled
					// onClick={() => likeThread(thread.id)}
					// className={`vote-button ${thread.upVotesBy.includes(authUser.id) && 'active-vote'}`}
					/>
					<p>{likedVote}</p>
					<TbArrowBigDownFilled
					// onClick={() => unlikeThread(thread.id)}
					// className={`vote-button ${thread.downVotesBy.includes(authUser.id) && 'active-vote'}`}
					/>
				</div>
				<div className='content-section'>
					<div className='content-section-upper'>
						<Link className='content-section-title' to={`/thread/${thread.id}`}>
							{thread.title}
						</Link>
						{/* {isHTML(thread.body) ? parse(thread.body) : <p>{thread.body}</p>} */}
					</div>
					<div className='content-section-lower'>
						<div className='content-section-button-interactive'>
							<div className='content-section-button-reply'>
								<p>{thread.totalComments ?? thread.comments.length}</p>
								<TbShare3 onClick={() => navigate(`/thread/${thread.id}`)} />
							</div>
						</div>
						<div className='content-section-user'>
							<p>Dibuat oleh</p>
							<p>{thread.owner.name}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
