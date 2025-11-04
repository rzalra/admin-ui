import React, { useState } from 'react';

function PostCard(props) {
  
  const { title, body } = props;
  
 ``
  const [clicked, setClicked] = useState(false);

  return (
    <div 
      className={`
        bg-white p-6 rounded-lg shadow 
        transition-all duration-300 ease-in-out
        flex flex-col h-full
        
        hover:scale-105 hover:border hover:border-gray-300 hover:bg-pink-100
      `}
    >
      
      <h2 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
        {title}
      </h2>
      
      
      <p className="text-gray-600 mb-4 text-sm">
        {body}
      </p>

      
      <button
        className={`
          text-white p-2 rounded-md mt-auto
          transition-colors duration-300
          hover:brightness-110 
          
          ${clicked ? "bg-special-red2" : "bg-gray-01"} 
        `}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"} 
      </button>
    </div>
  );
}

export default PostCard;