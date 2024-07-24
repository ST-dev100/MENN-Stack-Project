// components/LoadingSpinner.js
const LoadingSpinner = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-pulse text-center">
            Walia Song Albums Website
        </h1>
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-24 w-24 sm:h-32 sm:w-32 shadow-lg">
          <style jsx>{`
            .loader {
              animation: spinner 1.2s linear infinite;
            }
            @keyframes spinner {
              0% {
                transform: rotate(0deg);
              }
              50% {
                transform: rotate(180deg);
                border-color: rgba(255, 255, 255, 0.5);
              }
              100% {
                transform: rotate(360deg);
                border-color: rgba(255, 255, 255, 1);
              }
            }
          `}</style>
        </div>
      </div>
    );
};

export default LoadingSpinner;
