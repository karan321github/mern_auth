import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure, signInStart, signInSuccess } from "../redux/user/userSlice";
import { OAuth } from "../components/OAuth.jsx";

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const{loading , error} = useSelector((state) => state.user) 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      
      if (data.success === false) {
       dispatch(signInFailure(data))
        return;
      }
      dispatch(signInSuccess(data))
      navigate("/");
    } catch (error) {
     dispatch(signInFailure(error))
    }
    
  };
  return (
    <div className="mx-auto my-10 max-w-lg p-3 border border-gray-500 rounded-md ">
      <h1 className="font-bold text-3xl text-center my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        <button className="p-3 uppercase hover:opacity-95 text-white rounded-lg bg-slate-700 ">
          {loading ? "Loading" : "Sign In"}
        </button>
        <OAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an account?</p>
        <Link to="/signup">
          <span className="text-blue-500 ">Sign up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">{error ? error.message || 'Something went wrong!' : ''}</p>
    </div>
  );
};
