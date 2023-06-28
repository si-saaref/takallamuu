import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ThreadItem from '../components/molecules/ThreadItem';
import {
	asyncAddNewThread,
	asyncGetAllThreads,
	asyncShowFilteredThreads,
} from '../states/threads/action';
import { asyncGetAllUsers } from '../states/users/action';
// import { AiOutlinePlusCircle } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
import Header from '../components/organisms/Header';
import NewThreadModal from '../components/organisms/NewThreadModal';
import TagItem from '../components/molecules/TagItem';
import { asyncGetAllTags, asyncShowMoreTags } from '../states/tags/action';
import { asyncGetAllLeaderboards } from '../states/leaderboards/action';

export default function HomePage() {
	const { threads, users, votes, tags, authUser, leaderboards } = useSelector((states) => states);
	const [isOpenModalThread, setIsOpenModalThread] = useState(false);
	const [isShowFullTags, setIsShowFullTags] = useState(false);
	const [selectedCategory, setSelectedCategory] = useState(null);
	// const { authUser, threads, users, votes } = useSelector((states) => states);
	const dispatch = useDispatch();
	// const navigate = useNavigate();

	useEffect(() => {
		dispatch(asyncGetAllUsers());
		dispatch(asyncGetAllThreads());
		dispatch(asyncGetAllLeaderboards());
	}, [dispatch, votes]);

	useEffect(() => {
		dispatch(asyncGetAllTags());
	}, [dispatch, threads]);

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

	const handleShowFullTags = () => {
		setIsShowFullTags((preState) => {
			if (!preState) {
				dispatch(asyncShowMoreTags());
			} else {
				dispatch(asyncGetAllTags());
			}
			return !preState;
		});
	};

	const handleShowThreadByCategory = (category) => {
		if (selectedCategory === null) {
			dispatch(asyncShowFilteredThreads({ category }));
			setSelectedCategory(category);
		} else {
			dispatch(asyncGetAllThreads());
			setSelectedCategory(null);
		}
	};

	return (
		<>
			<Header isLarege />
			<main>
				<div className='homepage container'>
					<div className='container-double'>
						<div className='homepage__discussion-wrapper content-container'>
							<div className='homepage__header'>
								<h1>Explore</h1>
								{authUser && (
									<button
										type='button'
										className='homepage__button-add-thread'
										onClick={() => setIsOpenModalThread(true)}
									>
										Kallim
									</button>
								)}
								<NewThreadModal
									isOpenModal={isOpenModalThread}
									setOpenModal={setIsOpenModalThread}
									handleAddThread={handleAddThread}
									listThreads={listThreads}
								/>
							</div>
							<div className='threads-list'>
								{users.length !== 0 &&
									listThreads !== 0 &&
									listThreads.map((thread) => <ThreadItem thread={thread} key={thread.id} />)}
							</div>
						</div>
						<div className='homepage__sidebar-wrapper'>
							<aside
								className={`homepage__sidebar__trending content-container ${
									tags.length > 7 && 'content--height-fit'
								}`}
							>
								<h1>Trending Category</h1>
								<div className='homepage__trending__list-tag-wrapper'>
									{tags.map((item) => (
										<TagItem
											title={item}
											key={item}
											onClick={() => handleShowThreadByCategory(item)}
											selectedCategory={selectedCategory}
										/>
									))}
								</div>
								{tags.length >= 7 && (
									<button
										type='button'
										className='homepage__trending__show-more-button'
										onClick={handleShowFullTags}
									>
										{isShowFullTags ? 'Show Less' : 'Show More'}
									</button>
								)}
							</aside>
							<aside className='homepage__sidebar__leaderboard content-container'>
								<h1>Leaderboard</h1>
								<div className='homepage__leaderboard__list-wrapper'>
									<div className='homepage__leaderboard__head leaderboard-content'>
										<p>No</p>
										<p>Name</p>
										<p>Score</p>
									</div>
									{leaderboards.map((item, idx) => (
										<div className='homepage__leaderboard__body leaderboard-content' key={item.id}>
											<p>{idx + 1}</p>
											<p>{item.user.name}</p>
											<p>{item.score}</p>
										</div>
									))}
								</div>
							</aside>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
