
import React from "react";

const Hero = () => {
    return (
        <div className="relative h-screen">
            {/* Video Background */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/il.mp4" // Replace with your video file path
                autoPlay
                loop
                muted
            ></video>import React from "react";

            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            
            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-5xl font-bold mb-4  cursor-pointer"> SMART FARMING </h1>
                <p className="text-xl mb-6">The Operating System for Precision Irrigation</p>
                <button
                    className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition"
                >
                    GET STARTED 
                </button>
            </div>
            
            {/* Social Icons */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-white hover:text-green-500 transition" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.729 0-1.325.597-1.325 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.495v-9.294h-3.127v-3.622h3.127v-2.671c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.59l-.467 3.622h-3.123v9.293h6.127c.729 0 1.325-.596 1.325-1.324v-21.35c0-.728-.596-1.325-1.325-1.325z"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-white hover:text-green-500 transition" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.851-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.266-.07-1.646-.07-4.851s.012-3.584.07-4.85c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.266-.058 1.646-.07 4.851-.07m0-2.163c-3.259 0-3.667.013-4.947.072-1.281.059-2.53.341-3.511 1.322-.981.981-1.263 2.23-1.322 3.511-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.059 1.281.341 2.53 1.322 3.511.981.981 2.23 1.263 3.511 1.322 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.281-.059 2.53-.341 3.511-1.322.981-.981 1.263-2.23 1.322-3.511.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.059-1.281-.341-2.53-1.322-3.511-.981-.981-2.23-1.263-3.511-1.322-1.28-.059-1.688-.072-4.947-.072z"/>
                        <circle cx="12" cy="12" r="3.563"/>
                        <path d="M18.406 5.594c-.796 0-1.441.646-1.441 1.441s.646 1.441 1.441 1.441 1.441-.646 1.441-1.441-.645-1.441-1.441-1.441z"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Hero;


// import React, { useRef, useState } from "react";

// const Hero = () => {
//   // Create a reference to the video element
//   const videoRef = useRef(null);

//   // State to track whether the video has been viewed or not
//   const [isViewed, setIsViewed] = useState(false);

//   const handleButtonClick = async () => {
//     if (videoRef.current) {
//       try {
//         // Check for getUserMedia support
//         if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//           console.error("getUserMedia is not supported in this browser.");
//           return;
//         }
  
//         // Request permission to access audio
//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  
//         // Toggle video sound (mute/unmute)
//         if (isViewed) {
//           videoRef.current.muted = true;
//         } else {
//           videoRef.current.muted = false;
//           videoRef.current.currentTime = 0;
//           await videoRef.current.play();
//         }
  
//         // Toggle state
//         setIsViewed(!isViewed);
  
//         // Stop audio stream
//         stream.getTracks().forEach((track) => track.stop());
//       } catch (err) {
//         console.error("Error accessing media devices:", err);
//       }
//     } else {
//       console.error("Video element not found.");
//     }
//   };
  
//   return (
//     <div className="relative h-screen">
//       {/* Video Background */}
//       <video
//         ref={videoRef}
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/videos/il.mp4" // Replace with your video file path
//         autoPlay
//         loop
//         muted // Initially muted
//       ></video>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-20"></div>

//       {/* Content */}
//       <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
//         <h1 className="text-5xl font-bold mb-4">SMART FARMING</h1>
//         <p className="text-xl mb-6">The Operating System for Precision Irrigation</p>
//         <button
//           className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition"
//         >
//           GET STARTED
//         </button>
//         {/* Experience the journey section */}
//         <div className="mt-8 flex items-center space-x-2 md:hidden">
//           <p className="text-sm">Experience the farming journey with us</p>
//           <button
//             onClick={handleButtonClick}
//             className="px-3 py-2 text-sm bg-transparent text-blue-300 border-2 border-x-green-400 rounded-full hover:text-white hover:bg-green-400 transition"
//           >
//             {isViewed ? "Mute" : "View"}
//           </button>
//         </div>

//       </div>

//       {/* Button and message in the bottom-left corner */}
//       <div className="absolute  bottom-4 left-4 md:flex items-center space-x-2 hidden text-white">
//         <p className="text-lg ">Experience the farming journey with us</p>
//         <button
//           onClick={handleButtonClick}
//           className="px-3 py-2 text-sm bg-transparent text-blue-300 border-2 border-x-green-400 rounded-full hover:text-white hover:bg-green-400 transition"
//         >
//           {isViewed ? "Mute" : "View"}
//         </button>
//       </div>

//       {/* Social Icons */}
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//           <svg
//             className="w-6 h-6 text-white hover:text-green-500 transition"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M22.675 0h-21.35c-.729 0-1.325.597-1.325 1.325v21.351c0 .729.596 1.324 1.325 1.324h11.495v-9.294h-3.127v-3.622h3.127v-2.671c0-3.1 1.893-4.788 4.657-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.917.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.59l-.467 3.622h-3.123v9.293h6.127c.729 0 1.325-.596 1.325-1.324v-21.35c0-.728-.596-1.325-1.325-1.325z" />
//           </svg>
//         </a>
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//           <svg
//             className="w-6 h-6 text-white hover:text-green-500 transition"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.266.07 1.646.07 4.851s-.012 3.584-.07 4.85c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.266.058-1.646.07-4.85.07s-3.584-.012-4.851-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.266-.07-1.646-.07-4.851s.012-3.584.07-4.85c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.266-.058 1.646-.07 4.851-.07m0-2.163c-3.259 0-3.667.013-4.947.072-1.281.059-2.53.341-3.511 1.322-.981.981-1.263 2.23-1.322 3.511-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.059 1.281.341 2.53 1.322 3.511.981.981 2.23 1.263 3.511 1.322 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.281-.059 2.53-.341 3.511-1.322.981-.981 1.263-2.23 1.322-3.511.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.059-1.281-.341-2.53-1.322-3.511-.981-.981-2.23-1.263-3.511-1.322-1.28-.059-1.688-.072-4.947-.072z" />
//             <circle cx="12" cy="12" r="3.563" />
//             <path d="M18.406 5.594c-.796 0-1.441.646-1.441 1.441s.646 1.441 1.441 1.441 1.441-.646 1.441-1.441-.645-1.441-1.441-1.441z" />
//           </svg>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Hero;
