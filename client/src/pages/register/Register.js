import axios from "axios";
import "./register.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { useNavigate } from "react-router-dom";
import { base_url } from "../../base_url";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    username: undefined,
    password: undefined,
  });
  //const [password_error, SetPassord_error] = useState(true);
  console.log(credentials);
  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await axios.post(`${base_url}/auth/register`, credentials);
      console.log(res.data);
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
          size="30"
        />
        <input
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
          className="lInput"
          size="30"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
          size="30"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
          size="30"
        />
        <input
          type="number"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
          size="30"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
          size="30"
        />

        <button disabled={loading} className="lButton" onClick={handleClick}>
          Register
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
