import React from 'react';

const Card = ({ logo, title, content }) => {
  return (
    <div className="bg-blue-300 p-4 rounded-md shadow-md">
        <div className=''>{logo}</div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default Card;