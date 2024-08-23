import React from 'react'

const About = () => {
  return (
    <div id="About" className="h-screen pt-[7rem]">
      <h1 className="text-6xl font-semibold flex  justify-center">About Me</h1>
      <p className="text-lg flex justify-center pt-4 text-gray-600">
        I write code like I make coffee—sometimes it's strong and smooth, other
        times it crashes unexpectedly!
      </p>
      <div className="grid grid-cols-9 pt-12">
        <div className="col-span-1"></div>
        <div className="col-span-3">
          <img
            src="AboutImage.jpeg"
            alt="Profile Pic"
            className="justify-center items-center w-[20rem] h-[20rem] rounded-3xl"
          ></img>
        </div>
        {/* <div className="col-span-1"></div> */}
        <div className="grid grid-cols-2 gap-4 col-span-4">
          <div className="col-span-1">
            <div className="bg-gray-50 shadow-xl rounded-lg p-6 h-[10rem] w-[15rem]">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="experience.png"
                  alt="experience"
                  className="h-11 w-11 rounded-full"
                />
              </div>
              <h2 className="text-xl flex justify-center font-semibold px-6">
                Experience
              </h2>
              <p className="text-gray-600 flex justify-center">Fresher</p>
            </div>
          </div>
          <div className="col-span-1">
            <div className="bg-gray-50 shadow-xl rounded-lg p-6 h-[10rem] w-[15rem]">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="project.png"
                  alt="experience"
                  className="h-10 w-10 "
                />
              </div>
              <h2 className="text-xl flex justify-center font-semibold px-6">
                Completed
              </h2>
              <p className="text-gray-600 flex justify-center">15+ projects</p>
            </div>
          </div>
          <p className="col-span-2 text-gray-600 font-md pt-4 pr-10 text-justify">
            Enthusiastic Computer Science major with a passion for learning and
            problem-solving. Eager to apply programming skills and collaborate
            on innovative projects. Motivated to grow in the tech industry and
            make a meaningful impact.
          </p>
          <a href="https://drive.google.com/file/d/1hlmuOuZQHIKcU-kFrHFoE38gk-KQNwdc/view?usp=drive_link" target='_blank'>
            <button className="hover:bg-slate-200 hover:border-white transition-all ease-linear duration-100 mt-4 rounded-md border-2 border-black font-semibold py-2 px-4">
              Download CV
            </button>
          </a>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default About
