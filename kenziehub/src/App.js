import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { RegisterPage } from "./pages/Register";
import { DashboardPage } from "./pages/Dashboard";
import { GlobalStyle } from "./styles/Global";
import { AuthProvider } from "./contexts/UserContext/AuthContext";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { TechProvider } from "./contexts/TechContext/TechContext";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AuthProvider>
        <TechProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Routes>
        </TechProvider>
      </AuthProvider>
    </div>
  );
}
export default App;
