import axios from 'axios';
import dotenv from 'dotenv';
import chalk from 'chalk';
dotenv.config();


if (!process.env.API_BASE_URL) {
    console.error(chalk.red('[Error] API_BASE_URL is not defined in .env'));
    process.exit(1);
}
const api = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

console.log(chalk.green(`[Info] API base URL set to: ${process.env.API_BASE_URL}`));

// Fetching data from server 
export const fetchData = async () => {
    try {
        const response = await api.get('/health');
        return response.data;
    } catch (error) {
        console.error(chalk.red(`[Error] Failed to fetch data: ${error}`));
        throw error;
    }
};

// Posting to the server 
export const postData = async (endpoint: string, data: any) => { // pass string as: /users
    try {
        const response = await api.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(chalk.red(`[Error] Failed to post data: ${error}`));
        throw error;
    }
};

export default api;