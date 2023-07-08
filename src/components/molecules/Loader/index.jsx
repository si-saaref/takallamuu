import LoadingBar from 'react-redux-loading-bar';

export default function Loader() {
	return (
		<div className='loading'>
			<LoadingBar className='load-bar' data-cy='loading-bar' />
			{/* <LoadingBar updateTime={100} maxProgress={95} progressIncrease={10} /> */}
		</div>
	);
}
