import axios from 'axios';

export default async function postIndatabase(title, username, content) {
  try {
    const newPost = await axios.post('https://dev.codeleap.co.uk/careers/', { title, username, content });
    return newPost;
  } catch (error) {
    return error;
  }
}
