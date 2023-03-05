import { Paper, Box, Typography, Grid } from "@mui/material";
import { FC } from "react";
import { TBenefit } from "../../pages/home/home.component";

type BenefitProps = {
  benefit: TBenefit;
};

const boxNumberStyle = {
  width: "4rem",
  height: "4rem",
  position: "absolute",
  top: "-1.5rem",
  left: "50%",
  transform: "translateX(-50%)",

  textAlign: "center",
  fontSize: "1.5rem",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: "1rem",
  backgroundColor: "black",
  borderRadius: "50%",
  color: "white",
};

const Benefit: FC<BenefitProps> = ({ benefit }) => {
  const { id, title, description } = benefit;

  return (
    <Grid item xs={12} sm={5} md={3}>
      <Paper
        elevation={3}
        sx={{
          position: "relative",
          padding: "2rem",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={boxNumberStyle}>{id}</Box>
        <Typography variant="h6" component="h2" marginTop="2rem" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Benefit;
