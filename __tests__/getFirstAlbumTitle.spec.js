import axios from 'axios';
import getFirstAlbumTitle from '../src/common/getFirstAlbumTitle';

jest.mock('axios');

it('returns the title of the first album', async () => {
  axios.get.mockResolvedValue({
    data: [
      {
        userId: 1,
        id: 1,
        title: 'My First Album',
      },
      {
        userId: 1,
        id: 2,
        title: 'Album: The Sequel',
      },
    ],
  });

  const title = await getFirstAlbumTitle();
  expect(title).toEqual('My First Album');
});
