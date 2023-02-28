import { useEffect, useState } from "react";

import { Box, Button, Paper, Typography } from "@mui/material";

import { useDispatch } from "react-redux";
import { fetchNewsStart } from "../../store/news/news.action";

import { useSelector } from "react-redux";
import { selectNews } from "../../store/news/news.selector";
import NewsCard from "../../components/news-card/news-card.component";

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    dispatch(fetchNewsStart());
  }, [dispatch]);

  const handleIncreaseLimit = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="2rem"
    >
      <Typography variant="title" gutterBottom>
        News
      </Typography>
      {news.slice(0, limit).map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} setLimit={setLimit} />
      ))}
      {limit < news.length && (
        <Button
          variant="contained"
          onClick={handleIncreaseLimit}
          size="large"
          sx={{ m: "2rem 0" }}
        >
          Show More
        </Button>
      )}
    </Box>
  );
};

export default News;
