import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";
import "./Auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password) {
      return setError("All fields are required");
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      return setError("Invalid email address");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    try {
      setLoading(true);
      await registerUser({
        email: form.email,
        password: form.password,
      });
      navigate("/login");
    } catch {
      setError("User already exists");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="blob-container">
      <div className="form-section">
        <h2>Create Account</h2>
        <p className="subtitle">Join ASL learning platform</p>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button disabled={loading}>
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>

      <div className="blob-section">
        <div className="blob-content">
          <h1>Hello!</h1>
          <p>
            Create an account and start converting text and sign language easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
