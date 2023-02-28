import { ChangeEvent, FormEvent, useState } from "react";
import { Box, Button, makeStyles, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(initialFormFields);
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const validateForm = () => {
    if (formFields.username !== "admin" || formFields.password !== "12345") {
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
        Sign In
      </Typography>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          variant="standard"
          type="text"
          label="username"
          margin="normal"
          name="username"
          value={formFields.username}
          onChange={handleInputChange}
        />
        <TextField
          variant="standard"
          type="password"
          label="password"
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
          Sign In
        </Button>
      </Form>
    </Box>
  );
};

export default SignIn;
