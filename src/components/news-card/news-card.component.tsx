import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNewsItem, fetchNewsStart } from "../../store/news/news.action";
import { selectNews } from "../../store/news/news.selector";
import { News } from "../../store/news/news.types";

type NewsCardProps = {
  newsItem: News;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NewsCard: FC<NewsCardProps> = ({ newsItem, setOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  const { id, title, body } = newsItem;

  const handleDelete = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error while deleting news item");
        }
        return response.json();
      })
      .then(() => {
        dispatch(deleteNewsItem(news, newsItem));
        setOpen(true);
      })
      .catch((error) => console.log(error));
  };

  const handleReadMore = () => {
    navigate(`${id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Paper elevation={3} sx={{ m: "0 auto", padding: "1rem" }}>
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
        <Box display="flex" justifyContent="space-between">
          <Button color="info" variant="contained" onClick={handleReadMore}>
            Read more
          </Button>
          <Button variant="contained" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default NewsCard;
