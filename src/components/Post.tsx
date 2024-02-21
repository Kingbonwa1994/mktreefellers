// Post.tsx
import Image from 'next/image';
import React, { useState } from 'react';


interface PostProps {
  title: string;
  content: string;
  uri: string;
}

const Post: React.FC<PostProps> = ({ title, content, uri }) => {
  const truncatedContent = content.slice(0,49)
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncation = () => setIsTruncated(!isTruncated);


  return (
    <div className="bg-white  p-4 mb-4 shadow-md rounded-md m-4">
      <h2 className="text-sm font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: isTruncated ? truncatedContent : content }} />                                                       
      <p className="text-blue-500">http:/{uri}</p>
      <button onClick={toggleTruncation}>
      {isTruncated ? 'Show More' : 'Show Less'}
    </button>
      </div>
  );
};

export default Post;
