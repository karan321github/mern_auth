import { useSelector } from "react-redux";

export const Profile = () => {
  const {currentUser} = useSelector((state) => state.user);
  return (
    <div className="mx-auto my-10 max-w-lg p-3 border border-gray-500 rounded-md ">
      <h1 className="font-bold text-3xl text-center my-7">Profile</h1>

      <form className="flex flex-col gap-4">
        <img
          src={currentUser.profile}
          className=" self-center cursor-pointer h-24 w-24 rounded-full object-cover"
          alt=""
        />
        <input
          className="bg-stone-300 p-3 text-black m-3"
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          className="bg-stone-300 p-3 text-black m-3"
          type="text"
          placeholder="E-mail"
          id="email"
        />
        <input
          className="bg-stone-300 p-3 text-black m-3"
          type="password"
          placeholder="password"
          id="password"
        />
        <button className="p-3 m-3 hover:opacity-90 uppercase bg-stone-600 text-white rounded-md">
          Update
        </button>
        <div className="flex justify-between m-3">
          <span className="text-red-500">Delete Account</span>
          <span className="text-blue-500">Sign out</span>
        </div>
      </form>
    </div>
  );
};
