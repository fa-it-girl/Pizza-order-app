// import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
// import Button from "./Button";

function Home() {
  // const username = useSelector((state) => state.user.userName);
  return (
    <div className="text-center my-10">
      <h1 className="text-xl text-black-500 text-center my-[30px]">
        The best pizza.
        <br />
        <span className="text-yellow-500">
           Straight out of the oven, straight to you.
        </span>

      </h1>

      <CreateUser />

      {/* { username==='' ? (<CreateUser /> ) : (<Button to='/menu' type='primary'>Continue ordering, {username}</Button>) } */}
    </div>
  );
}

export default Home;
