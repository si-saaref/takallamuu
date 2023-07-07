import { ImReply } from 'react-icons/im';
import { BsSuitHeartFill, BsHeartbreakFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import parse from 'html-react-parser';
import { decodeHTMLEntities, getDate, isHTML } from '../../../utlis/utils';
import {
	asyncDislikeThread,
	asyncLikeThread,
	asyncNeutralThread,
} from '../../../states/votes/action';
import TagItem from '../TagItem';
import useNotification from '../../../hooks/useNotification';

export default function ThreadItem({ thread, isDetailPage = false }) {
	const { authUser } = useSelector((states) => states);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const notif = useNotification();

	const handleLikeThread = (threadId) => {
		if (!authUser) {
			notif.customError('like');
			return;
		}
		if (thread.upVotesBy.includes(authUser?.id)) {
			dispatch(asyncNeutralThread({ threadId }));
		} else {
			dispatch(asyncLikeThread({ threadId }));
		}
	};

	const handleDislikeThread = (threadId) => {
		if (!authUser) {
			notif.customError('dislike');
			return;
		}
		if (thread.downVotesBy.includes(authUser?.id)) {
			dispatch(asyncNeutralThread({ threadId }));
		} else {
			dispatch(asyncDislikeThread({ threadId }));
		}
	};

	const handleCopyLinkThread = () => {
		const link = isDetailPage ? window.location.href : `${window.location.href}thread/${thread.id}`;
		navigator.clipboard.writeText(link);
		notif.miniSuccess('Successfully copied to clipboard');
	};

	const contentThread = decodeHTMLEntities(thread.body);

	return (
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
					<div className='thread__content-info'>
						<p className='thread__content__username'>{thread.owner.name}</p>
						<p className='thread__content__date'>{getDate(thread.createdAt)}</p>
					</div>
					<Link className='thread__content__title' to={`/thread/${thread.id}`}>
						{thread.title}
					</Link>
					{isHTML(contentThread) ? parse(contentThread) : <p>{contentThread}</p>}
				</div>
				<div className='thread__content-section-bottom'>
					<div className='thread__content__interactive-wrapper'>
						<div className='thread__content__interactive__item'>
							<BsSuitHeartFill
								aria-label='like this thread'
								onClick={() => handleLikeThread(thread.id)}
								className={`button__interactive-item ${
									thread.upVotesBy.includes(authUser?.id) && 'active-vote'
								}`}
							/>
							<p>{thread.upVotesBy.length}</p>
						</div>
						<div className='thread__content__interactive__item'>
							<BsHeartbreakFill
								aria-label='unlike this thread'
								onClick={() => handleDislikeThread(thread.id)}
								className={`button__interactive-item ${
									thread.downVotesBy.includes(authUser?.id) && 'active-vote'
								}`}
							/>
							<p>{thread.downVotesBy.length}</p>
						</div>
						<div className='thread__content__interactive__item'>
							<ImReply
								aria-label='comment this thread'
								className='button__interactive-item'
								onClick={() => navigate(`/thread/${thread.id}`)}
							/>
							<p>{thread.totalComments ?? thread.comments.length}</p>
						</div>
						<div className='thread__content__interactive__item'>
							<FaLink
								aria-label='copy link this thread'
								className='button__interactive-item'
								onClick={handleCopyLinkThread}
							/>
						</div>
					</div>
					<TagItem title={thread.category} clickable={false} />
				</div>
			</div>
		</div>
	);
}
