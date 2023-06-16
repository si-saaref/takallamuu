// import parse from 'html-react-parser';
// import { isHTML } from '../utils/utlis';
import { ImReply } from 'react-icons/im';
import { BsSuitHeartFill, BsHeartbreakFill } from 'react-icons/bs';
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
				<div className='profile-picture-section'>
					<img
						src={thread.owner.avatar}
						alt={`${thread.owner.name}-avatar`}
						className='profile-picture-user'
					/>
				</div>
				<div className='content-section'>
					<div className='content-section-top'>
						<p className='content__username'>{thread.owner.name}</p>
						<Link className='content__title' to={`/thread/${thread.id}`}>
							{thread.title}
						</Link>
						{/* {isHTML(thread.body) ? parse(thread.body) : <p>{thread.body}</p>} */}
					</div>
					<div className='content-section-bottom'>
						<div className='content__interactive-wrapper'>
							<div className='content__interactive__item'>
								<BsSuitHeartFill
								// onClick={() => likeThread(thread.id)}
								// className={`vote-button ${thread.upVotesBy.includes(authUser.id) && 'active-vote'}`}
								/>
								<p>{thread.upVotesBy.length}</p>
							</div>
							<div className='content__interactive__item'>
								<BsHeartbreakFill
								// onClick={() => unlikeThread(thread.id)}
								// className={`vote-button ${thread.downVotesBy.includes(authUser.id) && 'active-vote'}`}
								/>
								<p>{thread.downVotesBy.length}</p>
							</div>
							<div className='content__interactive__item'>
								<ImReply onClick={() => navigate(`/thread/${thread.id}`)} />
								<p>{thread.totalComments ?? thread.comments.length}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
