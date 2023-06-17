import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetDetailThread } from '../states/detailThread/action';
import { useParams } from 'react-router-dom';
import ThreadItem from '../components/molecules/ThreadItem';
import { AiOutlineArrowLeft } from 'react-icons/ai';
// import ThreadReply from '../components/ThreadReply';
// import ThreadReplyForm from '../components/ThreadReplyForm';
// import { asyncCreateCommentThreadActionCreator } from '../states/comment/action';

export default function DetailPage() {
	const { id } = useParams();
	const { detailThread } = useSelector((states) => states);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncGetDetailThread({ idThread: id }));
	}, [id, dispatch]);

	// const onSubmitComment = ({ content, setValueComment }) => {
	// 	dispatch(asyncCreateCommentThreadActionCreator({ threadId: id, content }));
	// 	setValueComment('');
	// };

	if (Object.keys(detailThread).length === 0) {
		return null;
	}

	return (
		<>
			<div className='homepage container'>
				<div className='container-single'>
					<div className='detailpage__thread-wrapper'>
						<div className='detailpage__info-wrapper'>
							<AiOutlineArrowLeft />
							<p>Thread</p>
						</div>
						<ThreadItem thread={detailThread} />
						{/* <div className='threads-replies'>
							<ThreadReplyForm onSubmitComment={onSubmitComment} />
							<h1>
								Komentar <span>({detailThread.comments.length})</span>
							</h1>
							{detailThread.comments.map((thread) => (
								<ThreadReply key={thread.id} thread={thread} threadId={id} />
							))}
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}
