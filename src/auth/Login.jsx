import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:5456/auth/signin", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);

            if (res.data.message == "Email not exits") {
              alert("Email not exits");
            } else if (res.data.message == "User Logged In Successfully") {
              navigate("/"); // Changed from "/home" to "/"
            } else {
              alert("Incorrect Email and Password not match");
            }
          },
          (fail) => {
            console.error(fail); // Error!
          }
        );
    } catch (err) {
      alert(err);
    }
  }
  return (
    <div className="container mx-auto">
      <div className="row">
        <h2 className="font-bold text-xl mb-2">Login</h2>
        <hr className="mb-4" />
      </div>

      <div className="row">
        <div className="col-sm-6">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="Enter Name"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="Enter Fee"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={login}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
