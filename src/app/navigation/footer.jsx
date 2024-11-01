

export default function Footer() {
    return(
        <div className="xs:flex-wrap md:flex w-full h-fit bg-blue-600 text-gray-50 text-base justify-around md:px-30 py-16 xs:space-y-6 md:space-y-0">

          <div className="flex xs:w-10/12 xs:mx-auto md:w-6/12 xs:space-x-14 md:space-x-48">
               <div className="flex-col xs:w-6/12 md:w-3/12">
                     <h1>
                        Collect, manage and prioritize user
                        feedback in one place with Grabee.
                     </h1>

                  </div>

                  <div className="flex-col space-y-5 xs:w-6/12 md:w-3/12">
                     <h1 className=" font-bold text-lg">
                        Company
                     </h1>

                     <ul className=" list-disc space-y-3 ml-4">
                        <li>Features</li>  
                        <li>Pricing</li> 
                        <li>Blog</li> 
                        <li>Glossary</li> 
                        <li>Legal</li> 
                     </ul>

                  </div>
                  

          </div>
           
            
            
             <div className="flex-col space-y-5 xs:w-10/12 xs:mx-auto md:w-4/12 ">

                <h1 className=" font-bold text-lg">
                  Recent Blogs
                </h1>

                <ul className=" list-disc space-y-3 ml-4 xs:w-7/12 md:w-10/12">
                    <li>
                       25 chrome extension that would help you become an advanced programme manager 
                    
                    </li>  

                    <li>
                       Simple 11-Steps Saas Product Strategy Framework
                    </li> 

                    <li>
                       Simple 11-Steps Saas Product Strategy Framework
                    </li> 

                    <li>
                       Simple 11-Steps Saas Product Strategy Framework
                    </li> 

                    <li>
                       Simple 11-Steps Saas Product Strategy Framework
                    </li> 

                </ul>

             </div>

        </div>
    );
}