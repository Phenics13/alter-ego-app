import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

import { setCurrentUser } from "../../store/user/user.action";

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  width: "80%",
});

const initialFormFields = {
  username: "",
  password: "",
};

const SignIn = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(initialFormFields);
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const validateForm = () => {
    const { username, password } = formFields;
    if (username !== "admin" || password !== "12345") {
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateForm();
    if (!validation) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }

    const { username } = formFields;
    dispatch(setCurrentUser({ username }));

    setFormFields(initialFormFields);
    navigate("/profile");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      margin="10rem auto 0"
      sx={{
        maxWidth: "25rem",
        width: "90%",
        padding: "2rem 1rem",
        backgroundColor: "background.paper",
        borderRadius: "0.5rem",
      }}
    >
      <Typography variant="h6" gutterBottom>
        {t("sign-in")}
      </Typography>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          variant="standard"
          type="text"
          label={t("username")}
          margin="normal"
          name="username"
          value={formFields.username}
          onChange={handleInputChange}
        />
        <TextField
          variant="standard"
          type="password"
          label={t("password")}
          margin="normal"
          name="password"
          value={formFields.password}
          onChange={handleInputChange}
        />
        {!isValid && (
          <Typography variant="caption" color="error">
            Invalid username or password
          </Typography>
        )}
        <Button variant="contained" type="submit" sx={{ mt: "1rem" }}>
          {t("sign-in")}
        </Button>
      </Form>
    </Box>
  );
};

export default SignIn;
