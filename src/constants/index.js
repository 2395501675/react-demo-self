
export const ORIGIN = {
    production: 'https://www.adyun.com',
    development: `http://${window.location.hostname}:3009`,
    test: 'https://www.en.adyun.com',
}[process.env.REACT_APP_ENV || 'development'];
