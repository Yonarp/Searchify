 import response from './response';

/**
 * Mimics async thread sleep for given milliseconds
 * @param {Number} milliseconds
 */
export const sleep = ms => new Promise((resolve) =>  setTimeout(resolve, ms));

export const getSearchData = async () => {
    await sleep(3000);
    return response;
} 