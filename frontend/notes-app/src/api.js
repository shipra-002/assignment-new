import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:3000', // For Backend code
// });

// export default api;

// import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Update to your backend URL
  headers: {
    'Content-Type': 'application/json',
    // Add other headers if needed
  },
});
export default api;

