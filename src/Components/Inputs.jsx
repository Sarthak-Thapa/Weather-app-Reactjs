import { PiGpsFixFill } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";

const Inputs = () => {
  return (
    <div className="flex x-5 my-6 flex-row justify-center space-x-4">
      <input
        className="text-gray-600 capitalize placeholder:lowercase focus:outline-none w-full shadow-xl rounded-sm p-2"
        type="text"
        placeholder="search by city..."
      />
      <IoSearchOutline
        size={40}
        className="cursor-pointer transition ease-out hover:scale-125"
      />
      <PiGpsFixFill
        size={40}
        className="cursor-pointer hover:scale-125 transition ease-out"
      />

      <div className="flex flex-row justify-center items-center w-1/4 ">
        <button className="text-2xl font-medium cursor-pointer hover:scale-125 transition ease-out mx-2">
          *C
        </button>
        <p className="px-1 text-2xl">|</p>
        <button className="text-2xl font-medium cursor-pointer hover:scale-125 transition ease-out">
          *F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
