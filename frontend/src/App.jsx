import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./pages/Home";
import TextToSign from "./pages/TextToSign";
import SignToText from "./pages/SignToText";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/common/Navbar";
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar handles token internally */}
      <Navbar />

      <Routes>
        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* PROTECTED ROUTES */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/text-to-sign"
          element={
            <ProtectedRoute>
              <TextToSign />
            </ProtectedRoute>
          }
        />

        <Route
          path="/sign-to-text"
          element={
            <ProtectedRoute>
              <SignToText />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
