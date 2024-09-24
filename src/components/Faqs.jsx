

export const Faqs = ({ faq, activeFaq,isActive}) => {

    return (
        <div className="flex gap-2 flex-col bg-slate-300 rounded-md">
            <div className={`faq-item p-4 border rounded-lg faq-sec`}>
                <div className="question flex justify-between items-center flex-wrap gap-3">
                    <h3 className="faq-question text-xl font-semibold">{faq.question}</h3>
                    <button className={` ${isActive ? "bg-red-600" : "bg-green-500"} faq-toggle-btn cursor-pointer mt-2 text-white border-none px-3 py-2 rounded-md text-lg`} onClick={() => {
                        activeFaq()
                    }}>{isActive ? "close" : "Show"}</button>
                </div>
                <div className="answer"><p className={`faq-answer mt-2 text-gray-600 `}>{ isActive && faq.answer}</p>
                </div>

            </div>
        </div>
    )
}