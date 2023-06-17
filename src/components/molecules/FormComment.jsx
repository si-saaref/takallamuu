import useInput from '../../hooks/useInput';

export default function FormComment({ onReplyThread, replyTo }) {
	const [comment, handleChangeComment, setValueComment] = useInput('');

	return (
		<>
			<div className='form-comment'>
				<h1>Replying to {replyTo}</h1>
				<form>
					<textarea
						name='comment'
						id='comment'
						value={comment}
						onChange={handleChangeComment}
					></textarea>
					<button
						type='button'
						onClick={() => onReplyThread({ content: comment, setValueComment })}
					>
						Reply
					</button>
				</form>
			</div>
		</>
	);
}
