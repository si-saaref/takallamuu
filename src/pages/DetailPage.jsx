// import { useDispatch, useSelector } from 'react-redux';
// import ThreadItem from '../components/ThreadItem';
// import { useEffect } from 'react';
// import { asyncGetDetailThreadActionCreator } from '../states/threadDetail/action';
import { useParams } from 'react-router-dom';
// import ThreadReply from '../components/ThreadReply';
// import ThreadReplyForm from '../components/ThreadReplyForm';
// import { asyncCreateCommentThreadActionCreator } from '../states/comment/action';

export default function DetailPage() {
	const { id } = useParams();
	// const { detailThread, comment, votes } = useSelector((states) => states);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(asyncGetDetailThreadActionCreator({ idThread: id }));
	// }, [id, dispatch, comment, votes]);

	// const onSubmitComment = ({ content, setValueComment }) => {
	// 	dispatch(asyncCreateCommentThreadActionCreator({ threadId: id, content }));
	// 	setValueComment('');
	// };

	// if (Object.keys(detailThread).length === 0) {
	// 	return null;
	// }

	return (
		<>
			<div className='homepage container'>
				<div className='container-single'>
					<div className='detailpage__thread-wrapper'>
						<h1>{id}</h1>
						{/* <ThreadItem thread={detailThread} />
					<div className='threads-replies'>
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
