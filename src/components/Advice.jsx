import axios from "axios";
import { useEffect, useState } from "react";

const Advice = () => {
  const [advice, setAdvice] = useState();
  const [index, setIndex] = useState();

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

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section className="relative w-full sm:w-96 bg-DarkGrayishBlue aspect-square rounded-xl p-8 text-center">
      <h1 className="text-NeonGreen text-sm tracking-[4px]">ADVICE #{index}</h1>
      <p className="text-quote text-LightCyan font-extrabold">{advice}</p>
      <div>
        <img
          src="./src/assets/pattern-divider-mobile.svg"
          alt="Divider"
          className="my-4 mx-auto"
        />
      </div>
      <button
        onClick={fetchAdvice}
        className=" p-4 bg-NeonGreen rounded-full absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%]"
      >
        <img src="./src/assets/icon-dice.svg" />
      </button>
    </section>
  );
};
export default Advice;
