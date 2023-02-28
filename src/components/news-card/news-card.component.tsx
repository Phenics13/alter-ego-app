import { Button, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNewsItem } from "../../store/news/news.action";
import { selectNews } from "../../store/news/news.selector";
import { News } from "../../store/news/news.types";

type NewsCardProps = {
  newsItem: News;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

const NewsCard: FC<NewsCardProps> = ({ newsItem, setLimit }) => {
  const { title, body } = newsItem;

  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  const handleDelete = () => {
    dispatch(deleteNewsItem(news, newsItem));
    setLimit((prevLimit: number) => prevLimit - 1);
  };

  return (
    <Paper elevation={3} sx={{ width: "80%", mb: "2rem", padding: "1rem" }}>
      <Typography
        variant="news_title"
        component="h2"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="news_body"
        component="p"
        sx={{
          display: "-webkit-box",
          WebkitLineClamp: "3",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          margin: "1rem 0",
        }}
      >
        {body}
      </Typography>
      <Button variant="contained" onClick={handleDelete} sx={{ ml: "auto" }}>
        Delete
      </Button>
    </Paper>
  );
};

export default NewsCard;
