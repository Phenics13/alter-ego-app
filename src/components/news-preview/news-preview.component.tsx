import { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
} from "@mui/material";

import { fetchNewsStart } from "../../store/news/news.action";
import {
  selectIsNewsLoading,
  selectNews,
  selectNewsNext,
} from "../../store/news/news.selector";

import NewsCard from "../news-card/news-card.component";

const NewsPreview = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsNewsLoading);
  const next = useSelector(selectNewsNext);

  const handleShowMore = () => {
    next && dispatch(fetchNewsStart(next));
  };

  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    console.log("close");
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
      {news.map((newsItem) => (
        <NewsCard key={newsItem.id} newsItem={newsItem} setOpen={setOpen} />
      ))}

      {isLoading ? (
        <Box sx={{ m: "2rem 0" }}>
          <CircularProgress />
        </Box>
      ) : (
        next && (
          <Button
            variant="contained"
            onClick={handleShowMore}
            size="large"
            sx={{ m: "2rem 0" }}
          >
            Show More
          </Button>
        )
      )}
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="success">News item deleted</Alert>
      </Snackbar>
    </Box>
  );
};

export default NewsPreview;
