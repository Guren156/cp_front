import React from 'react';
import { Link } from 'react-router-dom';

const NewsList = ({ news }) => {
  if (news.length === 0) {
    return <p className="no-articles-found">Nenhum artigo encontrado</p>;
  }

  return (
    <div className="news-list">
      {news.map(item => (
        <div key={item.id} className="news-item">
          <img src={item.image} alt={item.title} className="news-image" />
          <div className="news-content">
            <h2 className="news-title">{item.title}</h2>
            <p className="news-excerpt">{item.content.substring(0, 50)}...</p>
            <Link to={`/news/${item.id}`} className="read-more-btn">
              Leia Mais
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;