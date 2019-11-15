import axios from 'axios';
//Get data

export const getData = async () => {
  try {
    const result = await axios.get(`projects.json`).then(({ data }) => data);
    return result;
  } catch (error) {
    console.log(error);
  }
};
