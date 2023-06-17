import { useState } from 'react';

export default function useInput(defaultValue = '') {
	const [value, setValue] = useState(defaultValue);

	const handleChangeValue = (e) => {
		setValue(e.target.value);
	};

	return [value, handleChangeValue, setValue];
}
