import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = 'https://www.pre-onboarding-selection-task.shop';
const ACCESS_TOKEN = localStorage.getItem('access_token');

const axiosConfig: AxiosRequestConfig = {
	baseURL: BASE_URL,
	headers: {
		Authorization: `Bearer ${ACCESS_TOKEN}`,
		withCredentials: true,
	},
};

const instance = axios.create(axiosConfig);

export default instance;
