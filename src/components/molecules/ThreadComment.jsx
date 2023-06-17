import parser from 'html-react-parser';
import { BsSuitHeartFill, BsHeartbreakFill } from 'react-icons/bs';
// import { useDispatch, useSelector } from 'react-redux';
// import {
// 	asyncLikeCommentdActionCreator,
// 	asyncNeutralVoteCommentActionCreator,
// 	asyncUnlikeCommentdActionCreator,
// } from '../states/votes/action';

export default function ThreadComment({ thread }) {
	// const { authUser } = useSelector((states) => states);
	// const dispatch = useDispatch();

	// const likeComment = (commentId) => {
	// 	if (thread.upVotesBy.includes(authUser.id)) {
	// 		dispatch(asyncNeutralVoteCommentActionCreator({ commentId, threadId }));
	// 	} else {
	// 		dispatch(asyncLikeCommentdActionCreator({ commentId, threadId }));
	// 	}
	// };

	// const unlikeComment = (commentId) => {
	// 	if (thread.downVotesBy.includes(authUser.id)) {
	// 		dispatch(asyncNeutralVoteCommentActionCreator({ commentId, threadId }));
	// 	} else {
	// 		dispatch(asyncUnlikeCommentdActionCreator({ commentId, threadId }));
	// 	}
	// };

	return (
		<>
			<div className='thread-comment'>
				<div className='comment__profile-picture'>
					<img src={thread.owner.avatar} alt={`${thread.owner.name}-avatar`} />
				</div>
				<div className='comment__content'>
					<div className='comment__content-section-top'>
						<p>{thread.owner.name}</p>
						<h1>{parser(thread.content)}</h1>
					</div>
					<div className='comment__content-section-bottom'>
						<div className='comment__like'>
							<BsSuitHeartFill
							// onClick={() => likeComment(thread.id)}
							// className={`vote-button ${thread.upVotesBy.includes(authUser.id) && 'active-vote'}`}
							/>
							<p>{thread.upVotesBy.length}</p>
						</div>
						<div className='comment__dislike'>
							<BsHeartbreakFill
							// onClick={() => unlikeComment(thread.id)}
							// className={`vote-button ${thread.downVotesBy.includes(authUser.id) && 'active-vote'}`}
							/>
							<p>{thread.downVotesBy.length}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
