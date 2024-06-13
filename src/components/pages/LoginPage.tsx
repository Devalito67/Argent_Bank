import "../../styles/LoginPage.css"
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setEmail, setPassword } from "../../redux/loginSlice";
import { setToken } from "../../redux/rememberMeSlice";
import { RootState } from "../../redux/store";
export default function LoginPage() {
  const dispatch = useDispatch();
  const { email, password} = useSelector((state: RootState) => state.Login)
  const { token } = useSelector((state: RootState) => state.RememberMe)
  const navigate = useNavigate()
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const loginResponse = await axios.post('http://localhost:3001/api/v1/user/login', {
        email: email,
        password: password,
      });
      const receivedToken = loginResponse.data.body.token;
      dispatch(setToken(receivedToken));

      const profileResponse = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
        },
      });

      console.log(profileResponse.data);
      navigate('/profile', { state: { profile: profileResponse.data, token: receivedToken } });
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return <div className="main-container bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={(e) => dispatch(setEmail(e.target.value))} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => dispatch(setPassword(e.target.value))} />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">Sign In</button>
      </form>
    </section>
  </div>
}
