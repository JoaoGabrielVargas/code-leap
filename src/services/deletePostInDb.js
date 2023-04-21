import axios from 'axios';

export default async function deletePostRequest(id) {
  console.log('tentou deletar o id', id);
  const result = await axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`);
  return result;
}
