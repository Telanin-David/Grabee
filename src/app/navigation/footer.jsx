

export default function Footer() {
    return(
        <div className=" flex w-full h-96 bg-blue-600 text-gray-50 text-base justify-around px-32 py-16 space-x-28">

             <div className="flex-col">
                <h1>
                    Collect, manage and prioritize user
                    feedback in one place with Grabee.
                </h1>

             </div>

             <div className="flex-col space-y-5">
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

             <div className="flex-col space-y-5">

                <h1 className=" font-bold text-lg">
                  Recent Blogs
                </h1>

                <ul className=" list-disc space-y-3 ml-4">
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