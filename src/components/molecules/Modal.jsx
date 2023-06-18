import ReactModal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({ isOpenModal, title, children }) {
	return (
		<ReactModal
			isOpen={isOpenModal}
			className='modal'
			overlayClassName='overlay-modal'
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
		>
			<div className='modal-container'>
				<div className='modal__description'>
					<p>{title}</p>
					<AiOutlineClose />
				</div>
				{children}
			</div>
		</ReactModal>
	);
}
