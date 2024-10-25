import Image from "next/image";


export default function Home() {
  return (
    <div className=" flex-col justify-center ">

      <div className=" pt-10 mx-auto w-10/12 space-y-5 mt-32">
      
        <p className=" text-green-700 text-center font-bold text-lg">
           EXPLORE FEEDBACK CYCLE
        </p>

        <div className=" w-6/12 mx-auto ">
          <p className=" text-gray-800 text-base font-light text-center ">
                User feedback tool to grab real input from your users to stop 
                you from assuming their<br />
                needs. Instead, let your users share their needs in their own voices.
            </p>
        </div>
        
        <div className=" w-7/12 mx-auto ">

            <p className=" font-extrabold text-5xl text-center leading-tight">
              Close feedback loop from
               <span className=" text-blue-600"> collecting</span> to <span className=" text-blue-600">announcing </span>
              new product updates.
            </p>
        </div>

      </div>

      <div className=" py-10 mx-auto w-10/12 space-y-5">

        <div className=" bg-blue-700 text-gray-50 w-fit h-fit text-2xl font-bold text-center mx-auto mt-5 transition-all duration-500 ease-in-out hover:bg-blue-200 hover:text-blue-600 hover:border-x-2 hover:border-blue-600 hover:border-dashed ">
            <p className=" py-4 px-12">
              Join Waitlist
            </p>
          </div>

          <p className=" text-center w-5/12 mx-auto">
              To celebrate the launch, our first 100 users got three months of unlimited
              access. Now we are offering two months of unlimited access to 100 more
              people, so hurry! Only 80 slots left!
          </p>
      </div>

      <div className=" py-10 mx-auto w-10/12 space-y-5">
         <div className=" w-fit h-fit mx-auto ">
            <Image
                src="/images/grabee1.svg" // Path to your image in the "public" folder
                alt="Description of the image"
                width={750}  // Desired width in pixels
                height={300} // Desired height in pixels
                priority={true} // Optional: Set priority for faster loading
              />
         </div>
      </div>
      
      <div className=" flex-col">

          <div className=" flex">
              
              <div className="w-6/12 rounded-tr-3xl bg-purple-200 h-16">

              </div>
              
              <div className="w-6/12 rounded-tl-3xl bg-purple-200 h-16">

              </div>
          </div>

          <div className=" flex-col bg-purple-200 pb-24">

              <p className=" text-4xl text-center font-extrabold text-gray-950 w-5/12 mx-auto">
                 Reduce churn by listening to 
                 your users and make them
                 feel invested in your product
              </p>

              <p className="text-sm text-center font-thin text-gray-600 w-6/12 mx-auto mt-4">
                   Feeling heard is huge when it comes to brand loyalty and keeping your users around.
              </p>

              <div className=" flex pt-16 justify-around w-11/12 mx-auto">
                   
                   <div className=" flex-col justify-center rounded-xl w-3/12 h-fit bg-purple-50 pl-14 py-10 space-y-3">
                        <p className=" font-bold text-4xl w-10/12">
                           55% of user requests
                        </p>

                        <p className=" w-9/12 font-2xl font-medium mb-3 ">
                          are not aknowledged by the sales team
                        </p>

                        <div className=" italic text-xl underline">

                          <a href="https://www.huffpost.com/entry/50-important-customer-exp_b_8295772"  > 
                            Source: Huffpost
                          </a>

                        </div>

                        
                   </div>

                   <div className=" flex-col justify-center rounded-xl w-3/12 h-fit bg-purple-50 pl-14 py-10 space-y-3">
                        <p className=" font-bold text-4xl w-10/12">
                           55% of user requests
                        </p>

                        <p className=" w-9/12 font-2xl font-medium mb-3 ">
                          are not aknowledged by the sales team
                        </p>

                        <div className=" italic text-xl underline">

                          <a href="https://www.huffpost.com/entry/50-important-customer-exp_b_8295772"  > 
                            Source: Huffpost
                          </a>

                        </div>

                        
                   </div>

                   <div className=" flex-col justify-center rounded-xl w-3/12 h-fit bg-purple-50 pl-14 py-10 space-y-3">
                        <p className=" font-bold text-4xl w-10/12">
                           55% of user requests
                        </p>

                        <p className=" w-9/12 font-2xl font-medium mb-3 ">
                          are not aknowledged by the sales team
                        </p>

                        <div className=" italic text-xl underline">

                          <a href="https://www.huffpost.com/entry/50-important-customer-exp_b_8295772"  > 
                            Source: Huffpost
                          </a>

                        </div>

                        
                   </div>


              </div>

          </div>

      </div>

      <div className=" flex-col">

        <div className=" flex bg-purple-200">
            
            <div className="w-6/12 rounded-tr-3xl bg-purple-50 h-16">

            </div>
            
            <div className="w-6/12 rounded-tl-3xl bg-purple-50 h-16">

            </div>
        </div>

        <div className=" flex-col bg-purple-50 pb-32 pt-16">
            
             <div className=" flex w-9/12 space-x-12 mx-auto">
                
                <div className="w-6/12">
                    <Image
                        src="/images/grabee2.svg" // Path to your image in the "public" folder
                        alt="Description of the image"
                        width={750}  // Desired width in pixels
                        height={300} // Desired height in pixels
                        priority={true} // Optional: Set priority for faster loading
                        className="w-full h-fit "
                    />

                </div>

                <div className="w-6/12 ">

                  <div className=" space-y-7">
                      <p className=" text-blue-600 font-bold  text-xl ">
                        GRABEE INTEGRATION
                      </p>

                      <p className="text-gray-950 font-extrabold text-4xl  ">
                        Integrate Grabee with
                        products your team
                        already uses
                      </p>

                      <p className=" text-gray-950  text-sm">
                        You can collect feedback manually or by using one of our
                        integrations. Every customer-facing team member should capture
                        the feedback they hear.
                      </p>

              

                  </div>

                  <div className="flex justify-center bg-blue-600 rounded-xl text-gray-50 font-bold text-lg w-5/12  py-4 mt-14 transition-all duration-500 ease-in-out hover:text-2xl hover:text-blue-600 hover:bg-blue-200 hover:font-bold hover:rounded-none hover:border-dashed hover:border-purple-600 hover:border-x-2  ">

                    <p>
                      Join Waitlist
                    </p>
                          
                  </div>

                </div>

             </div>

        </div>

      </div>
         

    </div>
  );
}
