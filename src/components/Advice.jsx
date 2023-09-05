import axios from "axios";
import { useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState(
    "Allah helps those, who help themselves."
  );
  const [index, setIndex] = useState(786);
  

  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://type.fit/api/quotes");
      const randomNumber = Math.floor(Math.random() * 16);
      setIndex(randomNumber + 1);
      const quote = response.data[randomNumber].text;

      setAdvice(quote);
      console.log(quote);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="relative w-[346px] h-[315px] sm:w-[542px] sm:h-[335px] bg-DarkGrayishBlue rounded-xl pt-8 pb-12 px-8 sm:p-16 sm:pt-12 text-center flex flex-col drop-shadow-2xl">
      <h1 className="text-NeonGreen text-sm tracking-[4px] font-bold">
        ADVICE #{index}
      </h1>
      <div className="grow relative">
        <p className="w-full text-quote text-LightCyan font-bold absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 before:content-[]">
          {advice}
        </p>
      </div>
      <div className="content-[url(/public/images/pattern-divider-desktop.svg)] sm:content-[url(/public/images/pattern-divider-mobile.svg)]"></div>
      <button
        onClick={fetchAdvice}
        id="fetch-advice"
        className=" p-5 bg-NeonGreen rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 duration-300 ease-in-out"
      >
        <img src="/images/icon-dice.svg" alt="Show Advice" />
      </button>
    </section>
    
  );
};
export default Advice;
