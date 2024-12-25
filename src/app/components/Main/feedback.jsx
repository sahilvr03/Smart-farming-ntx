"use client";
import React, { useState } from "react";

const FeedbackPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Main button to open the popup */}
      <button
        className="fixed bottom-5 right-5 z-50 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all"
        onClick={togglePopup}
      >
        Rate Our Services
      </button>

      {/* Popup content */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg relative">
            {/* Cross button at the top-right corner */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
              onClick={togglePopup}
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              We'd love some feedback
            </h2>

            {/* Feedback Section 1 */}
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700">
                Will You Come Back?
              </p>
              <div className="flex justify-center gap-3 mt-2">
                <span
                  role="img"
                  aria-label="angry"
                  className="cursor-pointer text-2xl"
                >
                  😡
                </span>
                <span
                  role="img"
                  aria-label="sad"
                  className="cursor-pointer text-2xl"
                >
                  😟
                </span>
                <span
                  role="img"
                  aria-label="neutral"
                  className="cursor-pointer text-2xl"
                >
                  😐
                </span>
                <span
                  role="img"
                  aria-label="happy"
                  className="cursor-pointer text-2xl"
                >
                  😊
                </span>
                <span
                  role="img"
                  aria-label="love"
                  className="cursor-pointer text-2xl"
                >
                  😍
                </span>
              </div>
            </div>

            {/* Feedback Section 2 */}
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700">
                How Would You Rate Our Platform?
              </p>
              <div className="flex justify-center gap-2 mt-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="cursor-pointer text-yellow-500 text-2xl"
                  >
                    ⭐
                  </span>
                ))}
              </div>
            </div>

            {/* Feedback Section 3 */}
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-700">
                Will You Recommend Us to Friends?
              </p>
              <div className="flex justify-center gap-6 mt-2">
                <span
                  role="img"
                  aria-label="thumbs-up"
                  className="cursor-pointer text-green-500 text-2xl"
                >
                  👍
                </span>
                <span
                  role="img"
                  aria-label="thumbs-down"
                  className="cursor-pointer text-red-500 text-2xl"
                >
                  👎
                </span>
              </div>
            </div>

            {/* Rate Button */}
            <button
              className="mt-6 w-full bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all"
              onClick={() => {
                alert("Thank you for your feedback!");
                togglePopup();
              }}
            >
              Rate
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackPopup;
