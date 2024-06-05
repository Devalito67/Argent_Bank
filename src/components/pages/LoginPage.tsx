import "../../styles/LoginPage.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userMail, setUserMail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/v1/user/login', {
      email: userMail,
      password: password,
    })
      .then(response => {
        const token = response.data.body.token
        axios.post('http://localhost:3001/api/v1/user/profile', {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then(profileResponse => {
            console.log(profileResponse.data);
            navigate('/profile', { state: { profile: profileResponse.data, token: token} });
          })
          .catch(profileError => console.error('Error fetching profile:', profileError));
      })
      .catch(error => console.error('Error:', error));
  }

  return <div className="main-container bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" onChange={(e) => setUserMail(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
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
