import { Box, Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

const Profile = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" component="h2" marginTop="2rem" gutterBottom>
        Hello {`${currentUser?.username}`} 👋
      </Typography>
      <Typography variant="body1" component="p">
        This is your profile page
      </Typography>
    </Container>
  );
};

export default Profile;
