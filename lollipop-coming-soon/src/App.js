import social from "./data/social.json";

function App() {
  const { telegram, twitter } = social;

  return (
    <>
      <div
        className="h-full bg-cover  bg-fixed bg-[#fbf8fa] "
        style={{ backgroundImage: `url(/background.svg)` }}
      >
        <div className="hidden md:block">
          <img
            src="/start_1.svg"
            alt="start"
            className="absolute md:mt-16 mt-2 ml-[300px]"
          />
          <img
            src="/start_2.svg"
            alt="start1"
            className="absolute md:mt-4 mt-2 ml-[600px]"
          />
          <img
            src="/start_2.svg"
            alt="start2"
            className="absolute md:mt-8 mt-2 ml-[900px]"
          />
          <img
            src="/Grupo_2.svg"
            alt="group"
            className="absolute md:mt-8 mt-2 ml-[1100px] w-16"
          />
          <img
            src="/Grupo_1.svg"
            alt="group"
            className="absolute mt-[360px] ml-12  w-16"
          />
          <img
            src="/start_2.svg"
            alt="group"
            className="absolute mt-[360px] left-[92.98%] w-16"
          />
          <img
            src="/Grupo_3.svg"
            alt="group"
            className="absolute left-[4.32%] right-[82.64%] top-[87.48%] bottom-[2.15%] w-20"
          />
          <img
            src="/start_1.svg"
            alt="start"
            className="absolute left-[52.32%] right-[35%] top-[80.48%] bottom-[2.15%]"
          />
          <img
            src="/Grupo_4.svg"
            alt="group"
            className="absolute left-[88.32%] right-[5.6%] top-[81.48%] bottom-[2.15%] w-20"
          />
        </div>

        <div className="md:hidden block">
          <img
            src="/start_1.svg"
            alt="start"
            className="absolute left-[38.2%] right-[65.6%] top-[10.48%] bottom-[76.15%] w-6"
          />
          <img
            src="/Grupo_2.svg"
            alt="group"
            className="absolute left-[44.2%] right-[19.6%] top-[0.98%] bottom-[24.15%] w-8"
          />
          <img
            src="/start_1.svg"
            alt="start"
            className="absolute left-[82.2%] right-[11.6%] top-[6.48%] bottom-[89.15%] w-6"
          />
          <img
            src="/start_2.svg"
            alt="start2"
            className="absolute left-[89.72%] right-[4.6%] top-[31.48%] bottom-[66.15%] w-6"
          />
          <img
            src="/Grupo_1.svg"
            alt="group"
            className="absolute left-[9.72%] right-[79.6%] top-[120.48%] bottom-[5.15%]  w-12"
          />
          <img
            src="/Grupo_4.svg"
            alt="group"
            className="absolute left-[47.72%] right-[79.6%] top-[115.48%] bottom-[5.15%]  w-8"
          />
          <img
            src="/start_1.svg"
            alt="group"
            className="absolute left-[87.72%] right-[79.6%] top-[118.48%] bottom-[5.15%]  w-8"
          />
        </div>

        <div className="sm:pt-20 pt-12 m-auto max-w-6xl grid lg:grid-cols-2 grid-cols-1 -space-y-9 md:space-y-3 lg:space-y-0 gap-4 pb-20">
          <div className="mt-4 justify-self-center">
            <img
              src="/Grupo_15890.svg"
              alt="candy"
              className="absolute -mt-2 sm:w-32 w-28"
            />
            <img
              src="/Grupo_15890.png"
              alt="candy1"
              className="absolute ml-2 sm:w-28 w-28"
            />
            <img
              src="/Grupo_15807.svg"
              alt="candy1"
              className=" sm:-mt-12 -mt-0  md:w-[520px] w-[420px] "
            />
            <div className="hidden md:block">
              <div className="flex space-x-12  mx-20">
                <a href={telegram}>
                  <div className="rounded-full px-3 py-3 border border-pink-600 hover:bg-pink-100">
                    <img src="/telegram.svg" className="w-[40px]" />
                  </div>
                </a>
                <a href={twitter}>
                  <div className="rounded-full px-3 py-3 border border-pink-600 hover:bg-pink-100">
                    <img src="/twitter.svg" className="w-[40px]" />
                  </div>
                </a>
              </div>

              <h1 className=" text-gray-600 text-7xl font-bold z-40">
                Get Notified,
              </h1>
              <h1 className="ml-4 text-gray-600 text-7xl font-bold z-40">
                When we launch{" "}
              </h1>
              <h4 className="mt-2 ml-16 text-blue-primary text-4xl font-normal z-40">
                Don’t worry not spam you :D
              </h4>
            </div>
          </div>
          <div className="md:pt-12 pt-0 justify-self-center ">
            <img
              src="/logo.svg"
              alt="candy1"
              className=" sm:w-[460px] w-[280px]"
            />
          </div>
          <div className="md:hidden block px-8 text-center md:py-0 py-6">
            <h1 className=" text-gray-600 text-4xl font-bold ">
              Get Notified, When we launch
            </h1>
            <h4 className="text-blue-primary text-2xl text-center">
              Don’t worry not spam you :D
            </h4>
          </div>
          <div className="flex space-x-12  mx-24 py-2 md:hidden block">
            <a href={telegram}>
              <div className="rounded-full px-3 py-3 border border-pink-600 hover:bg-pink-100">
                <img src="/telegram.svg" className="w-[120px]" />
              </div>
            </a>
            <a href={twitter}>
              <div className="rounded-full px-3 py-3 border border-pink-600 hover:bg-pink-100 ">
                <img src="/twitter.svg" className="w-[120px]" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
