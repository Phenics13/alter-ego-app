import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Home from "./pages/home/home.component";
import Navigation from "./pages/navigation/navigation.component";
import News from "./pages/news/news.component";
import Profile from "./pages/profile/profile.component";
import SignIn from "./pages/sign-in/sign-in.component";
import RequireAuth from "./utils/require-auth.utils";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
