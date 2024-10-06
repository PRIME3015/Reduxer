import React, { useState } from "react";
import styles from "../styles/Login.module.css";
import { useNavigate } from "react-router-dom"; // Ensure this is imported from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setUser } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Dispatch the setUser action with email and password
    dispatch(setUser({ email, password }));

    // Navigate to the home page after submitting
    navigate("/");

    // Clear the form inputs
    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
