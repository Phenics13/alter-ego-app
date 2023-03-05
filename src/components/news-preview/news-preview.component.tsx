import { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";

import { fetchNewsStart } from "../../store/news/news.action";
import {
  selectIsNewsLoading,
  selectNews,
  selectNewsNext,
} from "../../store/news/news.selector";

import NewsCard from "../news-card/news-card.component";

const NewsPreview = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsNewsLoading);
  const next = useSelector(selectNewsNext);

  const handleShowMore = () => {
    next && dispatch(fetchNewsStart(next));
  };

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop="2rem"
    >
      <Typography variant="title" gutterBottom>
        {t("news")}
      </Typography>
      <Grid container spacing={2} width={{ xs: "90%", sm: "80%" }}>
        {news.map((newsItem) => (
          <NewsCard
            key={newsItem.id}
            newsItem={newsItem}
            setOpen={setOpenSnackbar}
          />
        ))}
      </Grid>

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
            {t("show_more")}
          </Button>
        )
      )}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert severity="success">{t("news_snackbar")}</Alert>
      </Snackbar>
    </Box>
  );
};

export default NewsPreview;
