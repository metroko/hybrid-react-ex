import type {MediaItem} from 'hybrid-types/DBTypes';
import {useState} from 'react';

const MediaRow = (props: {item: MediaItem}) => {
  const {item} = props;
  const [dummyLikes, setDummyLikes] = useState('');

//   const dummyLikesState = useState(0);
//   const dummyLikes = dummyLikesState[0];
//   const setDummyLikes = dummyLikesState[1];

  return (
            <tr>
              <td>
                <img src={item.thumbnail} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{new Date(item.created_at).toLocaleString('fi-FI')}</td>
              <td>{item.filesize}</td>
              <td>{item.media_type}</td>
              <td>Likes: {dummyLikes}
                <button onClick={() => {
                    setDummyLikes(dummyLikes + 1)
                }}
                >Add dummy like</button>
              </td>
            </tr>
  );
};
export default MediaRow;