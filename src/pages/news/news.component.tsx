import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { fetchNewsStart, setNews } from "../../store/news/news.action";

import NewsPreview from "../../components/news-preview/news-preview.component";
import Article from "../article/article.component";

const News = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNews([]));
    dispatch(fetchNewsStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<NewsPreview />} />
      <Route path=":newsId" element={<Article />} />
    </Routes>
  );
};

export default News;
