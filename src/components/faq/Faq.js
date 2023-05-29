import React, { ReactDom } from "react";
import "./faq.scss";

const questions = [
  {
    id: 1,
    question: "Popular Articles",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 2,
    question: "Fix problems & request removals",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 3,
    question: "Browse the web",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
  {
    id: 4,
    question: "Search on your phone or tablet",
    answer:
      "Suspendisse ipsum elit, hendrerit id eleifend at, condimentum et mauris. Curabitur et libero vel arcu dignissim pulvinar ut ac leo. In sit amet orci et erat accumsan interdum.",
  },
];

// const Faq = () => {

//   return (
//     <section className="page-container" id="faq">
//       <h2 className="text-left font-bold text-2xl mb-4">
//         FREQUENTLY ASKED QUESTIONS
//       </h2>
//       <h5 className="text-left font-normal text-base mb-4">
//         Don’t see your question listed? Feel free to contact us for additional
//         assistance.
//       </h5>
//     </section>
//   );
// };

// export default Faq;

const FAQ = () => {
  return (
    <section className="page-container" id="faq">
      <h2 className="text-center font-bold text-2xl mb-4">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <h5 className="text-center font-normal text-base mb-4">
        Don't see your question listed? Feel free to contact us for additional
        assistance.
      </h5>
      <div className="faq mx-3 my-3 md:mx-20" id="faq">
        {questions.map((question) => (
          <Question
            key={question.id}
            id={question.id}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </section>
  );
};

const Question = (props) => {
  const [isActive, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  return (
    <div onClick={handleClick} id="faq" className="cursor-pointer">
      <div className="question-wrapper">
        <div className="question" id={props.id}>
          <h3 className="text-lg font-bold text-white">{props.question}</h3>
          <button onClick={handleClick}>
            <svg
              className={isActive ? "active" : ""}
              viewBox="0 0 320 512"
              width="100"
              title="angle-down"
            >
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
          </button>
        </div>
        <div className={isActive ? "answer active" : "answer "}>
          {props.answer}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
