import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

ReactModal.setAppElement('#root');

export default function Modal({ isOpenModal, setOpenModal, title, children }) {
	return (
		<ReactModal
			isOpen={isOpenModal}
			className='modal'
			overlayClassName='overlay-modal'
			onRequestClose={() => setOpenModal(false)}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
		>
			<div className='modal-container'>
				<div className='modal__description'>
					<p>{title}</p>
					<AiOutlineClose onClick={() => setOpenModal(false)} />
				</div>
				{children}
			</div>
		</ReactModal>
	);
}