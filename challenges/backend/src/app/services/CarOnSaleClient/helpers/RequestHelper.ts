import fetch from 'node-fetch';
import * as dotenv from "dotenv";
dotenv.config({ path: process.env.PWD + '/.env' });


export const getToken = async ():Promise<string> => {
    const { TEST_EMAIL, TEST_PASSWORD, API_BASE, AUTH_PATH } = process.env
    const tokenEndPoint = API_BASE + AUTH_PATH! + TEST_EMAIL
    try {
        const response = await fetch(tokenEndPoint, {
            method: 'put',
            body: JSON.stringify( {
                "password": TEST_PASSWORD
            }),
            headers: {'Content-Type': 'application/json'}
            });
            const res = await response.json();
            return res.token;
    } catch (error) {
        process.exit(-1);
    }
}

export const getRunningAuctionsRequest = async () => {
    const { API_BASE, BUYER_AUCTIONS_PATH } = process.env
    const token = await getToken();
    const runningAuctionsEndpoint = API_BASE! + BUYER_AUCTIONS_PATH
    try {
        const response = fetch(runningAuctionsEndpoint, {
            method: 'get',
            headers: { 'Content-Type': 'application/json', 'authtoken': token, 'userid': 'salesman@random.com' }
        });
        return (await response).json();
    } catch (error) {
        process.exit(-1);
    }

}