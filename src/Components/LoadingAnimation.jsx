import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="w-screen h-screen p-10 flex items-center justify-center">
      <div
        class="w-12 h-12 rounded-full animate-spin
                    border-8 border-solid border-slate-900 border-t-transparent"
      ></div>
    </div>
  );
};

export default LoadingAnimation;
