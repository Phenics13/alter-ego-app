import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import { Box, Typography, Container, Grid, Button } from "@mui/material";

import Benefit from "../../components/benefit/benefit.component";

export type TBenefit = {
  id: number;
  title: string;
  description: string;
};

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const refBenefits = useRef<HTMLHRElement>(null);

  const benefitsArray = t("benefits", {
    returnObjects: true,
  }) as Array<TBenefit>;

  const handlePreviewClick = () => {
    refBenefits.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Container maxWidth="xl">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="90vh"
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
          textAlign={{ xs: "center", sm: "left" }}
          gap="2rem"
        >
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              fontSize={{ xs: "2rem", sm: "3rem" }}
            >
              <Trans i18nKey="development">
                Develop wonderful
                <br />
                projects with us.
              </Trans>
            </Typography>
            <Typography variant="body1" component="p">
              {t("create")}
            </Typography>
          </Box>
          <Box>
            <img
              src="https://kor.ill.in.ua/m/400x253/163212.jpg"
              alt="preview photo"
              style={{ borderRadius: "1rem" }}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: "4rem", p: "0.5rem 4rem" }}
          onClick={handlePreviewClick}
        >
          <Typography variant="h6">{t("let_go")}</Typography>
        </Button>
      </Box>

      <hr style={{ border: "1px solid black" }} ref={refBenefits} />
      <Grid container gap="2rem" justifyContent="center" sx={{ m: "3rem 0" }}>
        {benefitsArray.map((benefit) => (
          <Benefit key={benefit.id} benefit={benefit} />
        ))}
      </Grid>

      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        gap="4rem"
        sx={{ m: "3rem 0" }}
      >
        <Button
          variant="contained"
          color="info"
          size="large"
          onClick={() => handleNavigate("news")}
        >
          {t("news")}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => handleNavigate("sign-in")}
        >
          {t("sign-in")}
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
