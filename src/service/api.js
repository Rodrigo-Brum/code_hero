import md5 from 'md5'

const publicKey = '1b05f037f16138ea3c2757512b40b0ea';
const privateKey = 'a2556f435bf271af8aa5ccc078bef25bf8512c79';
const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const api = `&ts=${time}&apikey=${publicKey}&hash=${hash}`

export default api;