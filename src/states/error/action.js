export const actionType = {
	SET_ERROR_MESSAGE: 'SET_ERROR_MESSAGE',
};

export const setErrorMessage = (errorMessage) => ({
	type: actionType.SET_ERROR_MESSAGE,
	payload: {
		errorMessage,
	},
});
