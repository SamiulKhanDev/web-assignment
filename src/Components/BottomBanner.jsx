import React from "react";

const BottomBanner = () => {
  return (
    <div className="w-full h-fit  bg-slate-800 text-white">
      <div className="container-content p-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-center">
        <div className="mb-10 lg:col-span-2 lg:mb-0">
          <h2 className="font-bold text-3xl text-gray-dark mb-5">
            Join the Secret Premium Club.
          </h2>
          <p className="text-base font-light text-gray-dark mb-10">
            Secret Premium gives you instant access to thousands of savings on
            all the must-have software and services for startups, small
            businesses and freelancers.
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div>
              <h4 className="header-xl text-gray-dark leading-7 mb-2">
                Full access to all our premium deals
              </h4>
              <p className="text-base font-light leading-6 text-justify">
                Access all our 225+ premium deals without any limit.
              </p>
            </div>
            <div>
              <h4 className="header-xl text-gray-dark leading-7 mb-2">
                Full access to all our premium deals
              </h4>
              <p className="text-base font-light leading-6 text-justify">
                Access all our 225+ premium deals without any limit.
              </p>
            </div>
            <div>
              <h4 className="header-xl text-gray-dark leading-7 mb-2">
                Full access to all our premium deals
              </h4>
              <p className="text-base font-light leading-6 text-justify">
                Access all our 225+ premium deals without any limit.
              </p>
            </div>
            <div>
              <h4 className="header-xl text-gray-dark leading-7 mb-2">
                Full access to all our premium deals
              </h4>
              <p className="text-base font-light leading-6 text-justify">
                Access all our 225+ premium deals without any limit.
              </p>
            </div>
          </div>
        </div>

        <img
          src="/images/banner.jpg"
          alt=""
          className="rounded-md w-full xl:col-span-1"
        />
      </div>
    </div>
  );
};

export default BottomBanner;
