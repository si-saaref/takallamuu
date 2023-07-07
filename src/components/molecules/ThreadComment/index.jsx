import parser from 'html-react-parser';
import { BsSuitHeartFill, BsHeartbreakFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import {
	asyncDislikeComment,
	asyncLikeComment,
	asyncNeutralComment,
} from '../../../states/votes/action';
import { getDate } from '../../../utlis/utils';

export default function ThreadComment({ thread, likeComment, dislikeComment, authUser }) {
	return (
		<div className='thread-comment'>
			<div className='comment__profile-picture'>
				<img src={thread.owner.avatar} alt={`${thread.owner.name}-avatar`} />
			</div>
			<div className='comment__content'>
				<div className='comment__content-section-top'>
					<div className='comment__content-info'>
						<p data-testid='username-content'>{thread.owner.name}</p>
						<p className='comment__content__date'>{getDate(thread.createdAt)}</p>
					</div>
					<h1 data-testid='body-content'>{parser(thread.content)}</h1>
				</div>
				<div className='comment__content-section-bottom'>
					<div className='comment__content__interactive__item'>
						<BsSuitHeartFill
							aria-label='like this comment'
							data-testid='like-comment-button'
							onClick={() => likeComment(thread.id)}
							className={`button__interactive-item ${
								thread.upVotesBy.includes(authUser?.id) && 'active-vote'
							}`}
						/>
						<p data-testid='total-like-comment'>{thread.upVotesBy.length}</p>
					</div>
					<div className='comment__content__interactive__item'>
						<BsHeartbreakFill
							aria-label='unlike this comment'
							data-testid='unlike-comment-button'
							onClick={() => dislikeComment(thread.id)}
							className={`button__interactive-item ${
								thread.downVotesBy.includes(authUser?.id) && 'active-vote'
							}`}
						/>
						<p data-testid='total-unlike-comment'>{thread.downVotesBy.length}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
