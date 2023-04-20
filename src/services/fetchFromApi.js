import axios from 'axios';

export default async function fetchFromApi() {
  const { data } = await axios.get('https://dev.codeleap.co.uk/careers/');
  return data.results;
}
