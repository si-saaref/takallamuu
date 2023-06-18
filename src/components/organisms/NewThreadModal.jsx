import useInput from '../../hooks/useInput';
import Modal from '../molecules/Modal';

export default function NewThreadModal({ isOpenModal = false, setOpenModal, handleAddThread }) {
	const [title, handleChangeTitle] = useInput('');
	const [tag, handleChangeTag] = useInput('');
	const [content, handleChangeContent] = useInput('');

	return (
		<Modal isOpenModal={isOpenModal} setOpenModal={setOpenModal} title='New Thread'>
			<div className='modal-new-thread'>
				<form className='form-container'>
					<div className='form__input-wrapper'>
						<input
							type='text'
							name='title'
							id='title-input'
							placeholder='Title'
							autoComplete='off'
							value={title}
							onChange={handleChangeTitle}
						/>
					</div>
					<div className='form__input-wrapper'>
						<input
							type='text'
							name='tag'
							id='tag-input'
							placeholder='Tags'
							autoComplete='off'
							value={tag}
							onChange={handleChangeTag}
						/>
					</div>
					<textarea
						placeholder='Kalaam'
						name='text'
						id='text'
						cols='30'
						rows='10'
						value={content}
						onChange={handleChangeContent}
					></textarea>
					<button
						type='button'
						className='form__button button-login'
						onClick={() => handleAddThread({ title, tag, content })}
					>
						Kallim
					</button>
				</form>
			</div>
		</Modal>
	);
}