// components/LoadingSpinner.js
const LoadingSpinner = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-white h-32 w-32 shadow-lg">
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
