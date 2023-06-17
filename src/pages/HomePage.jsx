import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncGetAllThreads } from '../states/threads/action';
import { asyncGetAllUsers } from '../states/users/action';
import ThreadItem from '../components/molecules/ThreadItem';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';

export default function HomePage() {
	const { threads, users } = useSelector((states) => states);
	// const { authUser, threads, users, votes } = useSelector((states) => states);
	const dispatch = useDispatch();
	// const navigate = useNavigate();

	useEffect(() => {
		dispatch(asyncGetAllUsers());
		dispatch(asyncGetAllThreads());
	}, [dispatch]);

	const listThreads = threads.map((thread) => ({
		...thread,
		owner: users.find((user) => user.id === thread.ownerId),
		// authUser: authUser.id,
	}));

	// const createNewThread = () => {
	// 	navigate('/new');
	// };

	console.log(listThreads);

	return (
		<>
			<Header isLarege={true} />
			<main>
				<div className='homepage container'>
					<div className='container-double'>
						<div className='homepage__discussion-wrapper content-container'>
							<h1>Explore</h1>
							<div className='threads-list'>
								{users.length !== 0 &&
									listThreads !== 0 &&
									listThreads.map((thread) => <ThreadItem thread={thread} key={thread.id} />)}
							</div>
						</div>
						<div className='homepage__sidebar-wrapper'>
							<aside className='homepage__sidebar__trending content-container'>
								<h1>Trending Tags</h1>
							</aside>
							<aside className='homepage__sidebar__leaderboard content-container'>
								<h1>Leaderboard</h1>
							</aside>
						</div>
					</div>
					{/* <AiOutlinePlusCircle className='button-add-new-thread' onClick={createNewThread} /> */}
				</div>
			</main>
		</>
	);
}
