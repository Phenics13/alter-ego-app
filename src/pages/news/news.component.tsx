import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchNewsStart } from "../../store/news/news.action";

import { Route, Routes } from "react-router-dom";
import NewsPreview from "../../components/news-preview/news-preview.component";
import Article from "../article/article.component";
import { selectNewsNext } from "../../store/news/news.selector";

const News = () => {
  const dispatch = useDispatch();
  const next = useSelector(selectNewsNext);

  useEffect(() => {
    next && dispatch(fetchNewsStart(next));
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<NewsPreview />} />
      <Route path=":newsId" element={<Article />} />
    </Routes>
  );
};

export default News;
