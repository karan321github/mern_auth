import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Header = () => {
  const {currentUser} = useSelector((state) => state.user);
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
          <Link to="/profile">
          {currentUser ? (<img   className="h-7 w-7 rounded-full object-cover"src={currentUser.profile} alt="profile"/>) : <li className="text-white">Sign In</li>}
            
          </Link>
        </ul>
      </div>
    </div>
  );
};
