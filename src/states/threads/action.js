export const actionType = {
	GET_ALL_THREADS: 'GET_ALL_THREADS',
	ADD_NEW_THREAD: 'ADD_NEW_THREAD',
};

export const getAllThreads = (threads) => {
  return {
    type: actionType.GET_ALL_THREADS,
    payload: {
      threads
    }
  }
}
