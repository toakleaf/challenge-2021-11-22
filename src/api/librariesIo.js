// out of time to keep debugging why this axios import isn't working
//
// import axios from "axios";

// const librariesIoAxios = axios.create({
//   baseURL: process.env.REACT_APP_LIBRARIES_URL,
//   params: { api_key: process.env.REACT_APP_LIBRARIES_API_KEY },
// });

// const librariesIo = {
//   getProject: async (platform, name) => {
//     const res = await librariesIoAxios.get(`${platform}/${name}`);
//     console.log(res);
//   },
// };

const baseURL = process.env.REACT_APP_LIBRARIES_URL;
const key = process.env.REACT_APP_LIBRARIES_API_KEY;

const librariesIo = {
  getProject: async (platform, name) => {
    const res = await fetch(`${baseURL}/${platform}/${name}?api_key=${key}`);
    return await res.json();
  },
};

export default librariesIo;
