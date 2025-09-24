import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getNewsById } from '../services/newsService';
import Comments from '../components/Comments';

const NewsPage = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    setNews(getNewsById(id));
  }, [id]);

  if (!news) {
    return <div className="container"><h2>Notícia não encontrada!</h2></div>;
  }

  return (
    <div className="container">
      <article className="full-news-article">
        <Link to="/" className="back-link">&larr; Voltar para a Home</Link>
        <h1>{news.title}</h1>
        <p className="news-date">{new Date(news.date).toLocaleDateString()}</p>
        <img src={news.image} alt={news.title} className="full-news-image" />
        <div className="full-news-content"><p>{news.content}</p></div>
        <div className="categories"><strong>Categorias:</strong> {news.categories.join(', ')}</div>
        <hr />
        <Comments comments={news.comments} />
      </article>
    </div>
  );
};

export default NewsPage;