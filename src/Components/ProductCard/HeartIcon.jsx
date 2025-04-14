import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IoMdHeartEmpty } from "react-icons/io";

const HeartIcon = () => {
  const [favorited, setFavorited] = useState(false);

  const handleToggle = () => {
    setFavorited(prev => !prev);
  };

  return (
    <div
      onClick={handleToggle}
      className='flex cursor-pointer w-[25px] h-[25px] border border-gray-400 justify-center items-center bg-white rounded-full pr-0.0'
    >
      {favorited ? (
        <FavoriteIcon className='text-2xl' style={{ color: 'red', fontSize: 16 }} />
      ) : (
        <IoMdHeartEmpty className='text-10xl' style={{ color: 'black', fontSize: 16 }} />
      )}
    </div>
  );
};

export default HeartIcon;
