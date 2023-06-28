import parser from 'html-react-parser';
import { BsSuitHeartFill, BsHeartbreakFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncDislikeComment,
	asyncLikeComment,
	asyncNeutralComment,
} from '../../states/votes/action';
import { getDate } from '../../utlis/utils';

export default function ThreadComment({ thread, threadId }) {
	const { authUser } = useSelector((states) => states);
	const dispatch = useDispatch();

	const likeComment = (commentId) => {
		if (thread.upVotesBy.includes(authUser?.id)) {
			dispatch(asyncNeutralComment({ commentId, threadId }));
		} else {
			dispatch(asyncLikeComment({ commentId, threadId }));
		}
	};

	const dislikeComment = (commentId) => {
		if (thread.downVotesBy.includes(authUser?.id)) {
			dispatch(asyncNeutralComment({ commentId, threadId }));
		} else {
			dispatch(asyncDislikeComment({ commentId, threadId }));
		}
	};

	return (
		<div className='thread-comment'>
			<div className='comment__profile-picture'>
				<img src={thread.owner.avatar} alt={`${thread.owner.name}-avatar`} />
			</div>
			<div className='comment__content'>
				<div className='comment__content-section-top'>
					<div className='comment__content-info'>
						<p>{thread.owner.name}</p>
						<p className='comment__content__date'>{getDate(thread.createdAt)}</p>
					</div>
					<h1>{parser(thread.content)}</h1>
				</div>
				<div className='comment__content-section-bottom'>
					<div className='comment__content__interactive__item'>
						<BsSuitHeartFill
							onClick={() => likeComment(thread.id)}
							className={`button__interactive-item ${
								thread.upVotesBy.includes(authUser?.id) && 'active-vote'
							}`}
						/>
						<p>{thread.upVotesBy.length}</p>
					</div>
					<div className='comment__content__interactive__item'>
						<BsHeartbreakFill
							onClick={() => dislikeComment(thread.id)}
							className={`button__interactive-item ${
								thread.downVotesBy.includes(authUser?.id) && 'active-vote'
							}`}
						/>
						<p>{thread.downVotesBy.length}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
