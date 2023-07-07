import LoadingBar from 'react-redux-loading-bar';

export default function Loader() {
	return (
		<div className='loading'>
			<LoadingBar />
			{/* <LoadingBar updateTime={100} maxProgress={95} progressIncrease={10} /> */}
		</div>
	);
}
