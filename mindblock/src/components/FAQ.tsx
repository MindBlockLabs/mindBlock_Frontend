import React, { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What is Mind Block and how does it work?",
      answer:
        "Mind Block is an innovative puzzle game that combines traditional problem-solving with blockchain technology. Players solve various types of puzzles while earning cryptocurrency rewards and competing in real-time tournaments.",
    },
    {
      question: "How do I earn tokens while playing?",
      answer:
        "You earn tokens by successfully completing puzzles, achieving high scores, participating in tournaments, and reaching daily milestones. The difficulty level and speed of completion affect your token rewards.",
    },
    {
      question: "What types of puzzles are available?",
      answer:
        "Mind Block features logic puzzles, coding challenges, and blockchain-specific problems. Each type tests different cognitive skills and offers varying reward levels based on complexity.",
    },
    {
      question: "How does the adaptive difficulty system work?",
      answer:
        "Our AI analyzes your solving patterns, time taken, and success rate to automatically adjust puzzle difficulty. This ensures you're always challenged but never overwhelmed, optimizing both learning and earning potential.",
    },
    {
      question: "Can I compete with other players?",
      answer:
        "Yes! Mind Block offers real-time competitions where you can compete against other players to solve puzzles under time pressure. Winners receive bonus tokens and climb the global leaderboard.",
    },
    {
      question: "How secure is my cryptocurrency wallet integration?",
      answer:
        "We use industry-standard encryption and never store your private keys. All transactions are processed through secure smart contracts on the blockchain, ensuring your assets remain under your complete control.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <motion.div
      className="mb-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h2
        className="text-4xl font-bold text-center mb-12 text-white"
        style={{ fontFamily: "var(--font-primary)" }}
      >
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border-b border-gray-700/50 last:border-b-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-8 py-6 text-left hover:bg-gray-700/30 transition-all duration-300 flex justify-between items-center group"
            >
              <span className="text-lg font-medium text-white pr-6 group-hover:text-cyan-400 transition-colors duration-300">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openFAQ === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 flex-shrink-0"
              >
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform transition-transform duration-300"
                >
                  <path
                    d="M1 1.5L6 6.5L11 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
            </button>
            <motion.div
              initial={false}
              animate={{
                height: openFAQ === index ? "auto" : 0,
                opacity: openFAQ === index ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-6 text-gray-300 leading-relaxed bg-gray-900/20">
                {faq.answer}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FAQ;
