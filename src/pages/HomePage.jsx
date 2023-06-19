import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadItem from '../components/molecules/ThreadItem';
import { asyncAddNewThread, asyncGetAllThreads } from '../states/threads/action';
import { asyncGetAllUsers } from '../states/users/action';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import NewThreadModal from '../components/organisms/NewThreadModal';
import TagItem from '../components/molecules/TagItem';

export default function HomePage() {
	const { threads, users, votes } = useSelector((states) => states);
	const [isOpenModalThread, setIsOpenModalThread] = useState(false);
	// const { authUser, threads, users, votes } = useSelector((states) => states);
	const dispatch = useDispatch();
	// const navigate = useNavigate();

	useEffect(() => {
		dispatch(asyncGetAllUsers());
		dispatch(asyncGetAllThreads());
	}, [dispatch, votes]);

	const listThreads = threads.map((thread) => ({
		...thread,
		owner: users.find((user) => user.id === thread.ownerId),
		// authUser: authUser.id,
	}));

	const handleAddThread = ({ title, content, tag }) => {
		dispatch(
			asyncAddNewThread({
				title,
				category: tag,
				body: content,
			})
		);
		setIsOpenModalThread(false);
	};

	console.log(listThreads);

	const listTag = [
		'Backend',
		'Food',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
		'Technology',
	];

	const cuttedListTag = [...listTag].slice(0, 7);

	return (
		<>
			<Header isLarege={true} />
			<main>
				<div className='homepage container'>
					<div className='container-double'>
						<div className='homepage__discussion-wrapper content-container'>
							<div className='homepage__header'>
								<h1>Explore</h1>
								<button
									className='homepage__button-add-thread'
									onClick={() => setIsOpenModalThread(true)}
								>
									Kallim
								</button>
								<NewThreadModal
									isOpenModal={isOpenModalThread}
									setOpenModal={setIsOpenModalThread}
									handleAddThread={handleAddThread}
								/>
							</div>
							<div className='threads-list'>
								{users.length !== 0 &&
									listThreads !== 0 &&
									listThreads.map((thread) => <ThreadItem thread={thread} key={thread.id} />)}
							</div>
						</div>
						<div className='homepage__sidebar-wrapper'>
							<aside className='homepage__sidebar__trending content-container'>
								<h1>Trending Tags</h1>
								<div className='homepage__trending__list-tag-wrapper'>
									{cuttedListTag.map((item, idx) => (
										<TagItem title={item} key={idx} />
									))}
								</div>
								{listTag.length >= 7 && (
									<button className='homepage__trending__show-more-button'>Show More</button>
								)}
							</aside>
							<aside className='homepage__sidebar__leaderboard content-container'>
								<h1>Leaderboard</h1>
							</aside>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
