import axios from 'axios';

export default async function deletePostRequest(id) {
  const result = await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`);
  return result;
}
