import axios from 'axios';
//Get data

export const getData = () => {
  try {
    const result = axios.get(`projects.json`).then(({ data }) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};
