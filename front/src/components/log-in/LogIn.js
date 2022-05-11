const LogIn = () => {
  return (
    <>
      <h1 className="mt-6 text-xl font-bold text-indigo-600 text-center">
        Welcome Back!
      </h1>
      <div className="flex w-full justify-center ">
        <div className="w-full max-w-md m-10 flex justify-center border-4 border-double shadow-lg">
          <form className="mt-12 text-sm md:text-lg">
            <div className="relative">
              <input
                id="email"
                type="email"
                name="email"
                required=""
                placeholder="Email address"
                className="peer h-10 w-full border-b-2 border-stone-400 focus:outline-none focus:border-indigo-600 placeholder-transparent"
              />
              <label
                for="email"
                className="
                text-stone-800 
                absolute 
                left-0  
                -top-3.5 
                text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-stone-600 peer-placeholder-shown:top-2 transition-all 
                peer-focus:-top-3.5
                peer-foucs:text-stone-600
                peer-focus:text-sm"
              >
                Email address
              </label>
            </div>
            <div className="mt-10 relative">
              <input
                id="password"
                name="password"
                required=""
                type="text"
                placeholder="Enter your password"
                className="peer h-10 w-full border-b-2 border-stone-400 focus:outline-none focus:border-indigo-600 placeholder-transparent"
              />
              <label
                for="password"
                className="
              absolute
              left-0
              -top-3.5
              text-sm 
              text-stone-800
              transition-all
              peer-placeholder-shown:text-base
              peer-placeholder-shown:text-stone-600
              peer-placeholder-shown:top-2
              peer-focus:-top-3.5
              peer-foucs:text-stone-600
              peer-focus:text-sm"
              >
                Password
              </label>
            </div>
            <div className="mt-10 mb-10">
              <button className="bg-indigo-600 p-2 rounded-md text-white w-full text-base hover:opacity-90">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
