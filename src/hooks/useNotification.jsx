import { toast } from 'react-hot-toast';
import { IoIosCloseCircle } from 'react-icons/io';

export default function useNotification() {
	const customError = (action) =>
		toast.custom(
			<div className='notification-toast-wrapper'>
				<IoIosCloseCircle />
				<div className='notification-toast__content'>
					<h1>Look&apos;s like your&apos;re trying to {action} this thread</h1>
					<p>
						Once you join <strong>Takallamuu</strong> you&apos;ll be able to like this thread
					</p>
				</div>
			</div>,
			{
				duration: 4000,
			}
		);

	return {
		customError,
	};
}
