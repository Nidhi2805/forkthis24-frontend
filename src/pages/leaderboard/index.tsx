import React, { Component } from "react";

class Leaderboard extends Component {
  render() {
    return (
      <div className="relative min-h-screen flex flex-col justify-between">
        {/* Container for the Block and Mario images, along with the cloud image and text */}
        <div className="relative ml-[3rem] md:ml-[13rem] mr-[1rem] md:mr-[3rem] mt-[14rem] md:mt-[24.5rem] hidden md:block">
          {/* Cloud Image */}
          <div className="absolute -top-[12rem] md:-top-[22rem] left-[2rem] md:left-[5rem] transform -translate-x-1/2">
            <img
              src="/LeaderBoard/Cloud.webp"
              alt="Left Image"
              className="w-[200px] md:w-[450px] h-auto"
            />
          </div>

          {/* Score and Rank Text */}
          <div className="absolute -top-[10rem] md:-top-[15rem] left-[2rem] md:left-[4.7rem] transform -translate-x-1/2 text-black text-center font-jersey">
            <div className="text-[12px] md:text-[18px] font-bold font-press">
              Your score: 230
            </div>
            <div className="text-[12px] md:text-[18px] font-bold mt-0 font-press">
              Your rank: 13
            </div>
          </div>

          {/* Mario Image */}
          <div className="absolute -top-[5rem] left-[1rem] md:left-[2rem]">
            <img
              src="/LeaderBoard/Mario.webp"
              alt="Second Image"
              className="w-[50px] h-[60px] md:w-[75px] md:h-[90px]"
            />
          </div>

          {/* Block Image */}
          <img
            src="/LeaderBoard/Block.webp"
            alt="Third Image"
            className="w-[100px] md:w-[140px] h-auto absolute top-[-0.70rem] left-[0rem]"
          />
        </div>

        {/* Leaderboard Title */}
        <div className="font-press relative ml-auto mr-12 md:mr-24 text-[36px] md:text-[57px] text-white text-right md:-mt-[36rem] z-10 md:block hidden">
          Leaderboard
        </div>

        {/* White background strip underneath leaderboard - Hide on phones */}
        <div className="absolute top-0 left-0 right-0 mx-auto z-0 w-full h-[100px] md:h-[180px] mt-[20rem] md:mt-[30rem] brick-col hidden md:block"></div>

        {/* Phone Layout: Leaderboard title centered */}
        <div className="text-center font-press text-[26px] text-white mt-[2rem] md:hidden">
          Leaderboard
        </div>

        {/* Cloud Image + Score & Rank for Phone Layout */}
        <div className="block md:hidden mx-auto mt-[1rem] mb-[2rem] relative">
          <img
            src="/LeaderBoard/Cloud.webp"
            alt="Cloud"
            className="w-[350px] h-auto" // Larger cloud size for phone screens
          />
          <div className="absolute top-[45%] left-[18%] text-black font-jersey text-[14px] text-center"> {/* Adjusted size and position */}
            <div className="font-bold font-press">Your score: 230</div>
            <div className="font-bold font-press">Your rank: 13</div>
          </div>
        </div>

        {/* Content Below Leaderboard */}
        <div className="relative z-20 w-full max-w-[90%] md:max-w-[53%] h-[400px] md:h-[550px] bg-[rgba(28,32,35,1)] md:mt-[-10rem] mt-[-3rem] md:ml-auto md:mr-[4.5rem] rounded-[20px] p-[10px] md:p-[20px] border-[0.2px] border-white flex flex-col justify-start items-center mx-auto md:mx-0"> {/* Adjusted mt for phone layout */}
          <section className="w-full mx-auto max-w-4xl mb-6 overflow-auto scrollbar-hide">
            {/* Header */}
            <div className="flex flex-row justify-between items-center mb-[10px] font-press">
              {["Rank", "Name", "Score"].map((header, index) => (
                <div
                  key={index}
                  className="w-[100px] md:w-[210px] h-[60px] md:h-[80px] bg-[rgba(73,75,86,1)] rounded-[10px] flex justify-center items-center text-white text-[16px] md:text-[22px] border-[3px] border-black p-2 mb-2 md:-mt-2"
                >
                  {header}
                </div>
              ))}
            </div>

            {/* Leaderboard Rows */}
            <div className="space-y-4 max-h-[250px] md:max-h-[400px]">
              {[
                "1 CodeCrafters 431",
                "2 HackMasters 390",
                "3 Debuggers 365",
                "4 CodeWarriors 450",
                "5 NullPointers 410",
                "6 BitShifters 400",
                "7 blahblah 420",
              ].map((text, index) => {
                const [rank, teamName, score] = text.split(" ");
                return (
                  <div
                    key={index}
                    className={`bg-[rgba(25,25,25,1)] p-4 border border-grey-600 rounded-lg flex justify-between items-center ${
                      index === 3 ? "bg-[rgba(21,184,121,1)]" : ""
                    }`}
                  >
                    <div className="text-white w-[100px] md:w-[210px] text-center">
                      {rank}
                    </div>
                    <div className="text-white w-[100px] md:w-[210px] text-center">
                      {teamName}
                    </div>
                    <div className="text-white w-[100px] md:w-[210px] text-center">
                      {score}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Leaderboard;





















