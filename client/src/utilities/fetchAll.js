import axios from "axios";
import baseUrl from "./baseUrl";

// Fetch multiple media based on type, trending, movie, tv
const fetchAll = async (page, mediaType) => {
  const { data } = await axios.get(`${baseUrl}/media/${mediaType}/${page}`);
  return data.data;
};

export default fetchAll;
