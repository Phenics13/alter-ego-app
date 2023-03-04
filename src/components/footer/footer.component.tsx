import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>
      <Container maxWidth="xl">
        <Typography variant="body2" component="p" align="center">
          © 2023. All rights reserved by Sergei Dranchenko.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
