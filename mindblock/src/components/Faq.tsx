import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faq = [
    {
      question: "How do I get started with Mind Block?",
      answer:
        "Sign up for an account, take the onboarding survey to assess you skill level, and start solving puzzles. You'll earn tokens as you complete challenges and can track your rogress on the leaderboard.",
    },
    { question: "Do I need coding experience to play?", answer: "" },
    { question: "How to token rewards work?", answer: "" },
    { question: "Do I need a crypto wallet to play?", answer: "" },
    { question: "How often are new puzzles added?", answer: "" },
    { question: "Is Mind Block free to play?", answer: "" },
  ];
  return (
    <div className="p-6">
      <div className="text-center text-[32px] font-semibold pb-6">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[750px] border-2 border-slate-800 rounded-lg p-4">
          {faq.map((item, index) => (
            <div key={index} className="">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left p-4 font-medium"
              >
                <div className="flex justify-between items-center">
                  <span className="text-[22px]">{item.question}</span>
                  <span className="text-lg font-bold text-gray-400">
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </span>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-4 text-gray-600">
                  <p className="pb-3 text-[14px]">{item.answer}</p>
                </div>
              )}
              <hr className="text-slate-800 border" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Faq;
