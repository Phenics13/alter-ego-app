import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Box, CircularProgress, Container, Typography } from "@mui/material";

import {
  selectIsNewsLoading,
  selectNewsMap,
} from "../../store/news/news.selector";

type ArticleRouteParams = {
  newsId: string;
};

const Article = () => {
  const { newsId } = useParams<
    keyof ArticleRouteParams
  >() as ArticleRouteParams;

  const { t } = useTranslation();
  const newsMap = useSelector(selectNewsMap);
  const isLoading = useSelector(selectIsNewsLoading);

  const [article, setArticle] = useState(newsMap[parseInt(newsId)]);

  useEffect(() => {
    setArticle(newsMap[parseInt(newsId)]);
  }, [newsId, newsMap]);

  return (
    <Box>
      {isLoading ? (
        <Box sx={{ m: "2rem auto", width: "min-content" }}>
          <CircularProgress />
        </Box>
      ) : (
        article && (
          <Container maxWidth="xl">
            <Typography variant="h4" component="h2" marginTop="2rem">
              {t("article", { id: article.id })}
            </Typography>
            <Typography variant="news_title" component="h2" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="news_body" component="p">
              {article.body}
            </Typography>
          </Container>
        )
      )}
    </Box>
  );
};

export default Article;
