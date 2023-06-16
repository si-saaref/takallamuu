// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { asyncGetAllThreadsActionCreator } from '../states/threads/action';
// import { asyncGetAllUsersActionCreator } from '../states/users/action';
// import ThreadsItem from '../components/ThreadItem';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

export default function HomePage() {
	// const { authUser, threads, users, votes } = useSelector((states) => states);
	// const dispatch = useDispatch();
	// const navigate = useNavigate();

	// useEffect(() => {
	// 	dispatch(asyncGetAllUsersActionCreator());
	// 	dispatch(asyncGetAllThreadsActionCreator());
	// }, [dispatch, votes]);

	// const listThreads = threads.map((thread) => ({
	// 	...thread,
	// 	owner: users.find((user) => user.id === thread.ownerId),
	// 	authUser: authUser.id,
	// }));

	// const createNewThread = () => {
	// 	navigate('/new');
	// };

	return (
		<>
			<div className='homepage container'>
				<div className='container-inner'>
          <div className="homepage__discussion-wrapper"></div>
          <div className="homepage__sidebar-wrapper">
            <aside className="homepage__sidebar__trending"></aside>
            <aside className="homepage__sidebar__leaderboard"></aside>
          </div>
					{/* <div className='threads-list'>
						{users.length !== 0 &&
							listThreads !== 0 &&
							listThreads.map((thread) => <ThreadsItem thread={thread} key={thread.id} />)}
					</div> */}
				</div>
				{/* <AiOutlinePlusCircle className='button-add-new-thread' onClick={createNewThread} /> */}
			</div>
		</>
	);
}
