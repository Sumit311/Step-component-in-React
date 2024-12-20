import "./index.css";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // let step = 1;
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const [test] = useState({ name: "roy" });

  function nextStep() {
    step < 3 ? setStep((s) => s + 1) : setStep(step);
  }

  function prevStep() {
    step > 1 ? setStep((s) => s - 1) : setStep(step);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step} : {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button
              onClick={() => (step > 1 ? setStep(step - 1) : setStep(step))}
            >
              Previous
            </button>
            <button onClick={nextStep}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
