import Image from 'next/image';
import React, { useState } from 'react';
import { LuHeart, LuMessageCircle, LuSend, LuBookmark } from 'react-icons/lu';
import { MdBorderHorizontal } from 'react-icons/md';

export default function SocioGramPost() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="w-full h-full mx-auto bg-white border border-gray-200 rounded-lg shadow-sm flex flex-col text-left">
      {/* Header */}
      <div className="flex items-center justify-between p-2 px-4 shrink-0">
        <div className="flex items-center space-x-3">
        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center  ">
            <Image
                width={100}
                height={100}
                src="/main-page/socciogram.png"
                alt="Profile"
                className="w-10 h-10 object-cover scale-125"
            />
        </div>
        
          <div>
            <h3 className="font-semibold text-sm">SocioGram</h3>
            <p className="text-xs text-gray-500">Social Media App</p>
          </div>
        </div>
        <button className="px-3 py-1 text-xs font-semibold text-blue-500 border border-blue-500 rounded hover:bg-blue-50 transition-colors  cursor-pointer">
            Follow
        </button>
       
      </div>

      {/* Image */}
      <div className="relative shrink bg-gray-100 h-full ">
        {/* <img
          src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500&h=500&fit=crop"
          alt="Post content"
          className="w-full h-full object-cover"
        /> */}
      </div>

      {/* Action Buttons */}
      <div className="flex items-start text-left justify-between h-12 p-3 shrink-0">
        <div className="flex items-center space-x-4">
          <button
            onClick={handleLike}
            className={`transition-colors ${liked ? 'text-red-500' : 'text-gray-700 hover:text-gray-500'}`}
          >
            <LuHeart className={`w-6 h-6 ${liked ? 'fill-current' : ''}`} />
          </button>
          <button className="text-gray-700 hover:text-gray-500">
            <LuMessageCircle className="w-6 h-6" />
          </button>
          <button className="text-gray-700 hover:text-gray-500">
            <LuSend className="w-6 h-6" />
          </button>
        </div>
        <button
          onClick={handleBookmark}
          className={`transition-colors ${bookmarked ? 'text-black' : 'text-gray-700 hover:text-gray-500'}`}
        >
          <LuBookmark className={`w-6 h-6 ${bookmarked ? 'fill-current' : ''}`} />
        </button>
      </div>
 


      
    </div>
  );
}