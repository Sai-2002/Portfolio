import React from "react";

const FooterComponent = () => {
  return (
    <footer id="Contact" className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p className="mb-2">
              <span className="font-bold">Phone:</span> (+91) 9962502316
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span> smnjr2002@gmail.com
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="mb-2">Follow me on:</p>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://www.linkedin.com/in/sai-mukesh-32b8b5224/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                LinkedIn
              </a>
              <a
                href="https://www.github.com/Sai-2002/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                Github
              </a>
              <a
                href="https://www.instagram.com/_.this_is_sai._/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
