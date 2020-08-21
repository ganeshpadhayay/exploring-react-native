import axios from 'axios';

async function getFirstAlbumTitle() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/albums',
  );
  return response.data[0].title;
}

module.exports = getFirstAlbumTitle;
