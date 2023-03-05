import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Typography, Container } from "@mui/material";
import { selectCurrentUser } from "../../store/user/user.selector";

const Profile = () => {
  const { t } = useTranslation();

  const currentUser = useSelector(selectCurrentUser);

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" component="h2" marginTop="2rem" gutterBottom>
        {t("hello", { name: currentUser?.username })}
      </Typography>
      <Typography variant="body1" component="p">
        {t("profile_description")}
      </Typography>
    </Container>
  );
};

export default Profile;
