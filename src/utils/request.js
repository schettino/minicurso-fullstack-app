import {BASE_URL} from './constants';

export default (async function(url, options) {
  try {
    if (!url) throw new Error('no url provided');
    let requestUrl = url;
    if (url.charAt(0) === '/') {
      requestUrl = `${BASE_URL}${url}`;
    }
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const response = await fetch(requestUrl, {headers, ...options});
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});
