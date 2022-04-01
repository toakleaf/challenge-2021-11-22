import axios from "axios";

const librariesIoAxios = axios.create({
  baseURL: process.env.REACT_APP_LIBRARIES_URL,
  params: { api_key: process.env.REACT_APP_LIBRARIES_API_KEY },
});

const librariesIo = {
  getProject: async (platform, name) => {
    const res = await librariesIoAxios.get(`${platform}/${name}`);
    console.log(res);
  },
};
