import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(false);
    }
  };
  return (
    <div className="mx-auto my-10 max-w-lg p-3 border border-gray-500 rounded-md ">
      <h1 className="font-bold text-3xl text-center my-7">Sign up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          onChange={handleChange}
        />

        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          onChange={handleChange}
        />

        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <button  className="p-3 uppercase hover:opacity-95 text-white rounded-lg bg-slate-700 ">
          {loading ? 'Loading' : 'SignUp'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/signin">
          <span className="text-blue-500 ">Sign in</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error && "something went wrong"}</p>
    </div>
  );
};
