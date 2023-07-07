import { useEffect } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import FormComment from '../components/molecules/FormComment';
import ThreadComment from '../components/molecules/ThreadComment';
import ThreadItem from '../components/molecules/ThreadItem';
import Header from '../components/organisms/Header';
import { asyncAddCommentThread } from '../states/comments/action';
import { asyncGetDetailThread } from '../states/detailThread/action';
import { asyncDislikeComment } from '../states/votes/action';

export default function DetailPage() {
	const { id } = useParams();
	const { detailThread, comment, authUser, votes } = useSelector((states) => states);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		// window.scrollTo(0, 0);
		dispatch(asyncGetDetailThread({ idThread: id }));
	}, [id, dispatch, comment, votes]);

	const onReplyThread = ({ content, setValueComment }) => {
		dispatch(asyncAddCommentThread({ threadId: id, content }));
		setValueComment('');
	};

	const handleBackPage = () => {
		navigate('/');
	};

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

	if (Object.keys(detailThread).length === 0) {
		return null;
	}

	return (
		<>
			<Header />
			<main>
				<div className='detailpage container'>
					<div className='container-single'>
						<div className='detailpage__thread-wrapper'>
							<div className='detailpage__info-wrapper'>
								<AiOutlineArrowLeft onClick={handleBackPage} />
								<p>Thread</p>
							</div>
							<ThreadItem thread={detailThread} isDetailPage />
							<div className='threads-comments'>
								{authUser && (
									<FormComment replyTo={detailThread.owner.name} onReplyThread={onReplyThread} />
								)}
								<h1>
									Comments <span>({detailThread.comments.length})</span>
								</h1>
								{detailThread.comments.map((thread) => (
									<ThreadComment
										key={thread.id}
										thread={thread}
										likeComment={likeComment}
										dislikeComment={dislikeComment}
										authUser={authUser}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
