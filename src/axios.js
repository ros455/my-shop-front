import axios from "axios";

const inctance = axios.create({
  baseURL: 'http://localhost:3333',
});

export default inctance;