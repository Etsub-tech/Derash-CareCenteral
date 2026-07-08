import { useState } from "react";
function Question(){
    const [openQuestion, setOpenQuestion] = useState(null);
    const faqs = [
    {
        question: "What is CareCentral?",
        answer: "CareCentral is a complete hospital management system that helps healthcare facilities manage patients, appointments, billing, pharmacy, laboratory, and more."
    },
    {
        question: "Can it work for multiple branches?",
        answer: "Yes. CareCentral supports multiple hospitals, clinics, and branches from a single system."
    },
    {
        question: "Can we add modules later?",
        answer: "Absolutely. The system is modular, allowing you to add new features whenever your organization grows."
    },
    {
        question: "Is cloud deployment available?",
        answer: "Yes. CareCentral supports both cloud and on-premise deployment."
    },
    {
        question: "Can it integrate with existing systems?",
        answer: "Yes. APIs can be used to integrate with existing healthcare software."
    },
    {
        question: "Do you provide training?",
        answer: "Yes. We provide complete training for administrators and staff."
    },
    {
        question: "Do you provide support?",
        answer: "Yes. We offer ongoing technical support and maintenance."
    }
];
    return(
        <>
            <div className='ques'>
                <hr />
                <h3 style={{color: "rgb(29, 86, 126)"}}>FAQ</h3>
                <div className='title'><h1>Frequently Asked Questions</h1></div>
                <h3 style={{color: "gray"}}>Everything you need to know about CareCentral.</h3>
                <div className="ques-grid">
                    {faqs.map((faq, index) => (
                        <div className="ques-grid-card" key={index}>
                            <div
                                className="question"
                                onClick={() =>
                                    setOpenQuestion(openQuestion === index ? null : index)
                                }
                            >
                                <span style={{color: "gray", fontSize: "15px"}}>{faq.question}</span>
                                <span>{openQuestion === index ? "-" : "+"}</span>
                            </div>

                            {openQuestion === index && (
                                <div className="answer">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                </div>
        </>
    )
}

export default Question;