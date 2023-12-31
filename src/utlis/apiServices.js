const apiServices = (() => {
	const BASE_URL = 'https://forum-api.dicoding.dev/v1';

	function removeFromStorage(keyName) {
		return localStorage.removeItem(keyName);
	}

	function getFromStorage(keyName) {
		let data;
		try {
			data = JSON.parse(localStorage.getItem(keyName));
		} catch (error) {
			removeFromStorage(keyName);
		}
		return data;
	}

	function putToStorage({ keyName, item }) {
		localStorage.setItem(keyName, JSON.stringify(item));
	}

	async function _fetchWithAuth(url, options = {}) {
		return fetch(url, {
			...options,
			headers: {
				...options.headers,
				Authorization: `Bearer ${getFromStorage('accessToken')}`,
			},
		});
	}

	async function register({ email, name, password }) {
		const response = await fetch(`${BASE_URL}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				name,
				password,
			}),
		});

		const responseJson = await response.json();
		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const {
			data: { user },
		} = responseJson;

		return user;
	}

	async function login({ email, password }) {
		const response = await fetch(`${BASE_URL}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const {
			data: { token },
		} = responseJson;

		return token;
	}

	async function getOwnProfile() {
		const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const {
			data: { user },
		} = responseJson;

		return user;
	}

	async function getAllUsers() {
		const response = await fetch(`${BASE_URL}/users`);

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const {
			data: { users },
		} = responseJson;

		return users;
	}

	async function getAllThreads() {
		const response = await fetch(`${BASE_URL}/threads`);

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const {
			data: { threads },
		} = responseJson;

		return threads;
	}

	async function getThreadDetail(id) {
		const response = await fetch(`${BASE_URL}/threads/${id}`);

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const {
			data: { detailThread },
		} = responseJson;

		return detailThread;
	}

	async function createThread({ title, body, category = '' }) {
		const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title,
				body,
				category,
			}),
		});

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const {
			data: { thread },
		} = responseJson;

		return thread;
	}

	async function addComment({ content, threadId }) {
		const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				content,
			}),
		});

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}

		const {
			data: { comment },
		} = responseJson;

		return comment;
	}

	async function likeThread({ threadId }) {
		const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/up-vote`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}
		const {
			data: { vote },
		} = responseJson;

		return vote;
	}

	async function dislikeThread({ threadId }) {
		const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/down-vote`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}
		const {
			data: { vote },
		} = responseJson;

		return vote;
	}

	async function neutralThread({ threadId }) {
		const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/neutral-vote`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}
		const {
			data: { vote },
		} = responseJson;

		return vote;
	}

	async function likeComment({ threadId, commentId }) {
		const response = await _fetchWithAuth(
			`${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}
		const {
			data: { vote },
		} = responseJson;

		return vote;
	}

	async function dislikeComment({ threadId, commentId }) {
		const response = await _fetchWithAuth(
			`${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}
		const {
			data: { vote },
		} = responseJson;

		return vote;
	}

	async function neutralComment({ threadId, commentId }) {
		const response = await _fetchWithAuth(
			`${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}
		const {
			data: { vote },
		} = responseJson;

		return vote;
	}

	async function getAllLeaderboards() {
		const response = await fetch(`${BASE_URL}/leaderboards`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const responseJson = await response.json();

		const { status, message } = responseJson;

		if (status !== 'success') {
			throw new Error(message);
		}
		const {
			data: { leaderboards },
		} = responseJson;

		return leaderboards;
	}

	return {
		putToStorage,
		getFromStorage,
		removeFromStorage,
		register,
		login,
		getOwnProfile,
		getAllUsers,
		getAllThreads,
		createThread,
		getThreadDetail,
		addComment,
		likeThread,
		dislikeThread,
		neutralThread,
		likeComment,
		dislikeComment,
		neutralComment,
		getAllLeaderboards,
	};
})();

export default apiServices;
