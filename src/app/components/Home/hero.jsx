import React from "react";

const Hero = () => {
    return (
        <div
            className="relative h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/images/1.jpg')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-5xl font-bold mb-4">SMART FARMING</h1>
                <p className="text-xl mb-6">The Operating System for Precision Irrigation</p>
                <button
                    className="px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition"
                >
                    GET STARTED
                </button>
            </div>
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
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-white hover:text-green-500 transition" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.56 20.333h-2.923v-9.293h2.923v9.293zm-1.462-10.574c-.931 0-1.688-.757-1.688-1.688s.757-1.688 1.688-1.688c.931 0 1.688.757 1.688 1.688s-.757 1.688-1.688 1.688zm13.667 10.574h-2.923v-4.755c0-1.135-.021-2.593-1.579-2.593-1.579 0-1.821 1.235-1.821 2.508v4.84h-2.923v-9.293h2.808v1.27h.04c.391-.74 1.345-1.519 2.77-1.519 2.962 0 3.509 1.948 3.509 4.478v5.064z"/>
                    </svg>
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                    <svg className="w-6 h-6 text-white hover:text-green-500 transition" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.874.12 3.176.77.84 1.233 1.911 1.233 3.222 0 4.61-2.807 5.62-5.478 5.918.43.372.823 1.103.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .321.216.694.825.576 4.765-1.587 8.198-6.084 8.198-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default Hero;
