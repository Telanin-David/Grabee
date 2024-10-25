

export default function Header() {
    return (
          <div className=" fixed top-0 w-full bg-white ">
              <div className=" flex font-bold text-2xl space-x-6 text-gray-950 justify-end py-5 pr-11  ">
                    <div className="flex space-x-6 my-auto ">
                        <h1 className=" transition-all duration-500 ease-in-out hover:text-purple-600  hover:text-3xl" > Pricing </h1>
                        <h1 className="transition-all duration-500 ease-in-out hover:text-purple-600  hover:text-3xl"> Blog </h1>
                        <h1 className=" transition-all duration-500 ease-in-out hover:text-purple-600 hover:text-3xl"> Features </h1>

                    </div>

                    <div className="rounded-lg flex bg-purple-200 text-purple-600 px-10 py-4 transition-all hover:bg-purple-600 hover:text-gray-50 duration-500 ease-in-out ">
                        <h1> Join Waitlist </h1>
                    </div>
                </div>

          </div>
                
    );
}