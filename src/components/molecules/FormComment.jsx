import useInput from '../../hooks/useInput';

export default function FormComment({ onSubmitComment }) {
	const [comment, handleChangeComment, setValueComment] = useInput('');

	return (
		<>
			<div className='form-comment'>
				<h1>Replying to Dimas</h1>
				<form>
					<textarea
						name='comment'
						id='comment'
						value={comment}
						onChange={(elem) => handleChangeComment(elem, true)}
					></textarea>
					<button
						type='button'
						onClick={() => onSubmitComment({ content: comment, setValueComment })}
					>
						Reply
					</button>
				</form>
			</div>
		</>
	);
}
