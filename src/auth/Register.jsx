import { useState } from "react";
import axios from "axios";

function Register() {
  const [employeename, setEmployeename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5456/auth/signup", {
        employeename: employeename,
        email: email,
        password: password,
      });
      alert("Employee Registation Successfully");
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="container mx-auto mt-4">
      <div className="card bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="font-bold text-xl mb-2">Student Registation</h1>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Employee name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="employeename"
              placeholder="Enter Name"
              value={employeename}
              onChange={(event) => {
                setEmployeename(event.target.value);
              }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              placeholder="Enter Email"
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
              placeholder="Enter password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={save}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
