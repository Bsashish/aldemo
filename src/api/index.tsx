
import axios from 'axios';
const headers = {
    'client_id': '32p8h8L3HlLSH48souw9HRtYWv4KRxW4',
    'client_secret' : 'Jmmay0cLgwhBKM43RHAZKLigfGH8WzfaAzPbBnXobwSqDUUue9sbnU1X9hfYcgSP',
    'authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlV6OXZNaEg3aXdJNU50T2tEN3dYMyJ9.eyJpc3MiOiJodHRwczovL2Rldi05aXlvbDJqMi51cy5hdXRoMC5jb20vIiwic3ViIjoiMzJwOGg4TDNIbExTSDQ4c291dzlIUnRZV3Y0S1J4VzRAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vb3JpZ2luc3RvY2tzL2FwaSIsImlhdCI6MTYzMDI5NDY3OSwiZXhwIjoxNjMyODg2Njc5LCJhenAiOiIzMnA4aDhMM0hsTFNINDhzb3V3OUhSdFlXdjRLUnhXNCIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.KNBVm-nihP3A6kuTs9seGtCqvLCA3jtGn0N0R-2xg5T_RSgSCYnG3Vjgor-kuFww1IYEUuIcFRWH0HIlMkZ_YV7rT5ERJkgdJVAY-I03us93rg9XQaxOEd64oEAPG7-aUVXwEwyM5yWkFkWI-56I3BWO7MD3UDD5c5CHmD1GRZ2RGtFZxsgCbhCtYfdrVpYywlEzg7v4pxDirLKPLGIZnuo6RzLTJs8x9cKuIXEZq0XWiwpGQQyQt2CNATWm84ayq4M1wsc3C0_As8m_aUnyXgGRdZtq-BDtBxygb_4TAQ0QvJnqPtDI9k2Qsl9Q9o376gaS0BTXGpQ7gAwURY7oPQ',
}
const instance = axios.create({
// .. where we make our configurations
    baseURL: 'https://origin-api-production.herokuapp.com/api/v1/',
    headers: headers
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';


export default instance;