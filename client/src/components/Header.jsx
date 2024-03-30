import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center  p-3">
        <Link to="/">
          <h1 className="font-bold text-white ">My Secret app</h1>
        </Link>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="text-white">Home</li>
          </Link>

          <Link to="/about">
            <li className="text-white">About</li>
          </Link>

          <Link to="/signin">
            <li className="text-white">SignIn</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
