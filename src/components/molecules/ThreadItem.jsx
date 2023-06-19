// import { isHTML } from '../utils/utlis';
import { ImReply } from 'react-icons/im';
import { BsSuitHeartFill, BsHeartbreakFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import {
// 	asyncLikeThreadActionCreator,
// 	asyncNeutralVoteThreadActionCreator,
// 	asyncUnlikeThreadActionCreator,
// } from '../states/votes/action';
import parse from 'html-react-parser';
import { decodeHTMLEntities, isHTML } from '../../utlis/utils';
import { useSelector } from 'react-redux';

export default function ThreadItem({ thread }) {
	const { authUser } = useSelector((states) => states);
	const navigate = useNavigate();
	// const dispatch = useDispatch();

	// const likeThread = (threadId) => {
	// 	if (thread.upVotesBy.includes(authUser?.id)) {
	// 		dispatch(asyncNeutralVoteThreadActionCreator({ threadId }));
	// 	} else {
	// 		dispatch(asyncLikeThreadActionCreator({ threadId }));
	// 	}
	// };

	// const unlikeThread = (threadId) => {
	// 	if (thread.downVotesBy.includes(authUser?.id)) {
	// 		dispatch(asyncNeutralVoteThreadActionCreator({ threadId }));
	// 	} else {
	// 		dispatch(asyncUnlikeThreadActionCreator({ threadId }));
	// 	}
	// };

	console.log('AUTH USER => ', authUser);

	const contentThread = decodeHTMLEntities(thread.body);

	return (
		<>
			<div className='thread-item'>
				<div className='thread__profile-picture-section'>
					<img
						src={thread.owner.avatar}
						alt={`${thread.owner.name}-avatar`}
						className='thread__profile-picture-user'
					/>
				</div>
				<div className='thread__content-section'>
					<div className='thread__content-section-top'>
						<p className='thread__content__username'>{thread.owner.name}</p>
						<Link className='thread__content__title' to={`/thread/${thread.id}`}>
							{thread.title}
						</Link>
						{isHTML(contentThread) ? parse(contentThread) : <p>{contentThread}</p>}
					</div>
					<div className='thread__content-section-bottom'>
						<div className='thread__content__interactive-wrapper'>
							<div className='thread__content__interactive__item'>
								<BsSuitHeartFill
									// onClick={() => likeThread(thread.id)}
									className={`button__interactive-item ${
										thread.upVotesBy.includes(authUser?.id) && 'active-vote'
									}`}
								/>
								<p>{thread.upVotesBy.length}</p>
							</div>
							<div className='thread__content__interactive__item'>
								<BsHeartbreakFill
									// onClick={() => unlikeThread(thread.id)}
									className={`button__interactive-item ${
										thread.downVotesBy.includes(authUser?.id) && 'active-vote'
									}`}
								/>
								<p>{thread.downVotesBy.length}</p>
							</div>
							<div className='thread__content__interactive__item'>
								<ImReply
									className='button__interactive-item'
									onClick={() => navigate(`/thread/${thread.id}`)}
								/>
								<p>{thread.totalComments ?? thread.comments.length}</p>
							</div>
							<div className='thread__content__interactive__item'>
								<FaLink className='button__interactive-item' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
