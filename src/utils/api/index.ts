import axios, { AxiosRequestConfig } from 'axios';
import jwtStorageService from '../../utils/jwt';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';

const axiosConfig: AxiosRequestConfig = {
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		withCredentials: true,
	},
};

const instance = axios.create(axiosConfig);

instance.interceptors.request.use(
	(config) => {
		const accessToken = jwtStorageService.getToken();
		if (accessToken) {
			config.headers.Authorization = `Bearer ${accessToken}`;
		}
		if (config.method === 'post' || config.method === 'put') {
			config.headers['Content-Type'] = 'application/json';
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default instance;
