import clsx from "clsx";
import React from "react";
import IP from "../components/IP";
import confetti from "canvas-confetti";

const home = () => {
  const btnClick = () => {
    var count = 200;
    var defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti(
        Object.assign({}, defaults, opts, {
          particleCount: Math.floor(count * particleRatio),
        })
      );
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <div className=" ">
      <button
        onClick={btnClick}
        className="mx-auto items-center rounded-md  bg-red-400 p-3"
      >
        Party Pooper{" "}
      </button>
      <IP
        className={clsx(
          " right-0 top-0 left-2/4 h-auto ",
          "translate-y-[50%] transform-gpu",
          "w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]",
          "z-[-1] opacity-60 "
        )}
      />
    </div>
  );
};

export default home;
