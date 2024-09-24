import { useEffect, useState } from "react"
import faqs from "../api/faq.json"
import { Faqs } from "./Faqs";

export const Accordian = () =>{
let faq = faqs.faq;
const[Faq,setFaq] = useState([]);

useEffect(() =>{
    setFaq(faq);
})
const[isActive,setIsActive] = useState(false)


// check active faq 
const handleCheckActive = (id) =>{
   setIsActive((prev) =>{
    return prev === id?false:id;
   })
}
// end /


    return (
        <div className="container flex flex-col gap-2">
            <h1 className="text-white mb-3">react accordion</h1>
             {
            Faq.map((faq) =>{
                 return <Faqs key={faq.id} faq={faq} activeFaq={() =>{
                    handleCheckActive(faq.id)
                 }}  isActive={isActive ===faq.id} />
            })
        }

        </div>
    )
}