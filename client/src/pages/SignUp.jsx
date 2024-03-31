import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="mx-auto my-10 max-w-lg p-3 border border-gray-500 rounded-md ">
      <h1 className="font-bold text-3xl text-center my-7">Sign up</h1>
      <form className="flex flex-col gap-4">
        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="text"
          placeholder="Username"
          id="username"
          name="username"
        />

        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />

        <input
          className="bg-slate-100 p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button className="p-3 uppercase hover:opacity-95 text-white rounded-lg bg-slate-700 ">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500 ">Sign in</span>
        </Link>
      </div>
    </div>
  );
};
