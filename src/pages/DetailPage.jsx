import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetDetailThread } from '../states/detailThread/action';
import { useNavigate, useParams } from 'react-router-dom';
import ThreadItem from '../components/molecules/ThreadItem';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ThreadComment from '../components/molecules/ThreadComment';
// import ThreadReplyForm from '../components/ThreadReplyForm';
// import { asyncCreateCommentThreadActionCreator } from '../states/comment/action';

export default function DetailPage() {
	const { id } = useParams();
	const { detailThread } = useSelector((states) => states);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(asyncGetDetailThread({ idThread: id }));
	}, [id, dispatch]);

	// const onSubmitComment = ({ content, setValueComment }) => {
	// 	dispatch(asyncCreateCommentThreadActionCreator({ threadId: id, content }));
	// 	setValueComment('');
	// };

	const handleBackPage = () => {
		navigate('/');
	};

	if (Object.keys(detailThread).length === 0) {
		return null;
	}

	console.log(detailThread);

	return (
		<>
			<div className='homepage container'>
				<div className='container-single'>
					<div className='detailpage__thread-wrapper'>
						<div className='detailpage__info-wrapper'>
							<AiOutlineArrowLeft onClick={handleBackPage} />
							<p>Thread</p>
						</div>
						<ThreadItem thread={detailThread} />
						<div className='threads-comments'>
							{/* <ThreadReplyForm onSubmitComment={onSubmitComment} /> */}
							<h1>
								Komentar <span>({detailThread.comments.length})</span>
							</h1>
							{detailThread.comments.map((thread) => (
								<ThreadComment key={thread.id} thread={thread} threadId={id} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
