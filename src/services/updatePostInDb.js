import axios from 'axios';

export default async function patchPostRequest(id, title, content) {
  const result = await axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, { title, content });
  console.log(result);
  return result;
}
