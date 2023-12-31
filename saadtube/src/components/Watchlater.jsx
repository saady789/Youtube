import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getsavedvideosAsync } from '../features/videoSlice';
import Videoitem from './Videoitem';

const Watchlater = () => {
  const [videos, setVideos] = useState([]);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  
  useEffect(() => {

    const fetchVids = async() => {
      try {
        const data = await dispatch(getsavedvideosAsync());
        console.log(data.payload.watchlaterVids);
        setVideos(data.payload.watchlaterVids); // Set the videos state
      } catch (error) {
        console.error('Error fetching liked videos:', error);
      }
    }
    fetchVids();
  }, [user])
  

  return (
    <>
      {!user && (<div className="flex flex-col justify-start align-middle text-center">
        <h1 className='font-bold p-5'>
          Please Signup To See Your Liked Videos
        </h1>
        <Link
          to="/signup"
          className='border-2 p-5 border-black hover:bg-black hover:text-white cursor-pointer'
        >
          Sign Up
        </Link>
      </div>)}
      {user && !videos && <div className='m-auto font-bold text-lg'>
        Loading...
      </div> }
      {user && videos && videos.length == 0 && <div className='m-auto font-bold text-lg'>
        There are no saved videos. Try saving one
      </div>}
      {user && videos && videos.length && (
      <>
      <h1 className='m-auto font-bold text-lg'>Your Saved Videos Are</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
    {videos?.map((vid) => (
      <Videoitem key={vid.id} video={vid} />
    ))}
  </div>
  </>
  )}


    </>
  );
}

export default Watchlater
