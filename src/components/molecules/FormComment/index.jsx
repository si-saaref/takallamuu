import useInput from '../../../hooks/useInput';

export default function FormComment({ onReplyThread, replyTo }) {
	const {
		value: comment,
		handleChangeValue: handleChangeComment,
		setValue: setValueComment,
	} = useInput('');

	return (
		<div className='form-comment'>
			<h1>Replying to {replyTo}</h1>
			<form>
				<textarea
					name='comment'
					id='comment'
					value={comment}
					onChange={handleChangeComment}
					placeholder='Comment here'
				/>
				<button type='button' onClick={() => onReplyThread({ content: comment })}>
					Reply
				</button>
			</form>
		</div>
	);
}
