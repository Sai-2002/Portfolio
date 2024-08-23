// src/components/ImageGallery.js
import React from "react";

const ImageGallery = ({ images }) => {
  // Create a function to divide images into columns
  const createColumns = (images, columns) => {
    const columnsArray = Array.from({ length: columns }, () => []);

    images.forEach((image, index) => {
      columnsArray[index % columns].push(image);
    });

    return columnsArray;
  };

  // Divide images into 4 columns for larger screens, 2 for smaller
  const columns = createColumns(images, 4);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-4">
          {column.map((image, imageIndex) => (
            <div key={imageIndex} className="p-1">
              {/* <img
                className="h-auto max-w-full rounded-lg"
                src={image.src}
                alt={image.alt}
              />
               */}

              <div className="h-auto max-w-full rounded-lg bg-gray-50 shadow-md">
                <img src={image.img} ></img>
                <h5 className="font-semibold text-md px-4 pt-2">
                  {image.title}
                </h5>
                <p className="px-4 py-2 text-sm text-gray-600 text-justify">{image.src}</p>
                <a href={image.github} target="_blank" className="flex justify-center pb-4 pt-2">
                  <button className="hover:bg-gray-200 py-1 px-2 rounded-lg border-2 border-black hover:border-transparent transition-all ease-linear duration-100 flex justify-center">
                    <img src="github-mark.png" className="w-6 h-5 pr-2 pt-1">
                    </img>
                  GitHub
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
