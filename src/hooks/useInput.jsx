import { useState } from 'react';

export default function useInput(defaultValue = '') {
	const [value, setValue] = useState(defaultValue);

	const handleChangeValue = (e, isTextArea = false) => {
		setValue(e.target.value);

		if (isTextArea) {
			console.log(e);
			e.style.height = e.scrollHeight + 'px';
		}
	};

	return [value, handleChangeValue, setValue];
}
