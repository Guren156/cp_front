import React, { useState, useEffect } from 'react';

const Comments = ({ comments }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <p>Carregando comentários...</p>;

  return (
    <div className="comments-section">
      <h3>Comentários</h3>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index} className="comment-item">
              <strong>{comment.name}:</strong> <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ainda não há comentários.</p>
      )}
    </div>
  );
};

export default Comments;