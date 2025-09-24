import React, { useState, useEffect } from 'react';
import { getAllNews } from '../services/newsService';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [allNews, setAllNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const news = getAllNews();
    setAllNews(news);
    setFilteredNews(news);
  }, []);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = allNews.filter(news => 
      news.title.toLowerCase().includes(lowerCaseQuery) ||
      news.content.toLowerCase().includes(lowerCaseQuery) ||
      news.categories.some(cat => cat.toLowerCase().includes(lowerCaseQuery))
    );
    setFilteredNews(filtered);
  };

  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      <NewsList news={filteredNews} />
    </div>
  );
};

export default HomePage;