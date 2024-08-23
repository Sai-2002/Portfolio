import React from 'react'
import Carousel from './Carasoul'

const Project = () => {

    const images = [
      {
        title: "DeepFake Frontend",
        src: "Built with React, this intuitive application enables users to upload images or videos and assess their authenticity. The React-based interface ensures a smooth and interactive experience, while advanced algorithms analyze the media and provide clear results with a confidence score, helping you quickly identify potential deepfakes.",
        alt: "Image 1",
        img: "deepfake-image.webp",
        github: "https://github.com/Sai-2002/deepfake-detection-frontend",
      },
      {
        title: "DeepFake Backend",
        src: "Developed in Python, this backend API leverages the E2TC model—an advanced EfficientNet V2 Vision Transformer— to analyze media files for deepfake detection. It efficiently processes image and video uploads, applies the sophisticated E2TC model to evaluate authenticity, and returns detailed results with confidence scores, ensuring accurate and reliable detection of manipulated content.",
        alt: "Image 2",
        img: "deepfake-image.webp",
        github: "https://github.com/Sai-2002/deepfake-detection-api",
      },
      {
        title: "Netflix Clone",
        src: " A React app that replicates Netflix's look and feel, using the IMDb API to browse movies and TV shows, view details, and access ratings and reviews. It offers a user-friendly interface with dynamic content and smooth navigation.",
        alt: "Image 3",
        img: "netflix.jpg",
        github: "https://github.com/Sai-2002/netflix-clone",
      },
      {
        title: "Keylogger",
        src: "This keylogger uses a Reverse Shell and Sockets to establish a connection with a Kali machine, retrieving the log.txt file that stores keystrokes directly instead of sending it via email. It leverages socket programming and netcat for secure data transfer. Requirements include C++17 or greater and a Linux system or subsystem.",
        alt: "Image 4",
        img: "keylogger.webp",
        github:
          "https://github.com/Sai-2002/Portfoliohttps://github.com/Sai-2002/advanced_keylogger",
      },
      {
        title: "Fall Detection",
        src: "This project is designed to detect if a person is falling based on sudden changes in acceleration and gyroscope data. It uses a Flask web application with MongoDB for user management and integrates with the Google Maps API to provide location information when a fall is detected.",
        alt: "Image 5",
        img: "fall.jpg",
        github: "https://github.com/Sai-2002/FallDetection-IOT",
      },
      {
        title: "Kanban",
        src: "This API provides robust support for managing and organizing tasks in a Kanban board format. It allows for the creation, updating, and deletion of boards, columns, and tasks, enabling users to efficiently track project progress and workflow. The API supports task assignment, status updates, and board customization, offering a flexible and scalable solution for project management and team collaboration.",
        alt: "Image 6",
        img: "kanban.webp",
        github: "https://github.com/Sai-2002/kanban",
      },
    ];

  return (
    <div id="Project" className="h-screen pt-[7rem]">
      <h1 className="text-6xl font-semibold flex  justify-center">Projects</h1>
      <p className="text-lg flex justify-center pt-4 text-gray-600">
        My works !
      </p>

      <div className="grid grid-cols-10 pt-8">
        <div className="col-span-1"></div>
        <div className="col-span-8">
          <Carousel images={images} />
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
}

export default Project
