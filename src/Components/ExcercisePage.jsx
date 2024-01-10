import { useParams } from 'react-router-dom';
import exercises from '../exercise.json';

function ExcercisePage() {
  const { id } = useParams();
  const exercise = exercises.find((e) => e.id == id);

  return (
    <section className="text-gray-700 body-font m-6 overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="lg:flex -mx-4">
          <div className="lg:w-1/2 mx-auto mb-10 lg:mb-0 lg:mx-4">
            <div className="max-w-2xl mx-auto relative overflow-hidden rounded-lg">
              <div
                id="default-carousel"
                className="relative"
                data-carousel="dynamic"
              >
                {exercise.images.map((image, index) => (
                  <div
                    key={index}
                    className={`overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96 ${
                      index === 0 ? 'duration-700 ease-in-out' : 'hidden'
                    }`}
                    data-carousel-item
                  >
                    <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                      {index + 1}
                    </span>
                    <img
                      src={`.${image}`}
                      className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
                      alt={exercise.name}
                    />
                  </div>
                ))}
                <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                  {exercise.images.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className="w-3 h-3 rounded-full"
                      aria-current="false"
                      aria-label={`Slide ${index + 1}`}
                      data-carousel-slide-to={index}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                    <span className="hidden">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                    <span className="hidden">Next</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-10 lg:py-6">
            <h2 className="text-xs text-gray-500 tracking-widest uppercase">
              {exercise.category}
            </h2>
            <h1 className="text-gray-900 text-3xl font-medium mb-2">
              {exercise.name}
            </h1>
            <div className="flex mb-4">
              <div className="flex items-center">
                <span className="flex">
                  {[1, 2, 3, 4, 5].map((index) => (
                    <svg
                      key={index}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                </span>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </div>
            </div>
            <h4 className="text-blue-700">Instructions :</h4>
            <p className="leading-relaxed">{exercise.instructions}</p>
            <div className="mt-6 pb-5 border-b-2 border-gray-200">
              <div className="flex">
                <h1 className="mr-3">Primary Muscles:</h1>
                <h3>{exercise.primaryMuscles.join(', ')}</h3>
              </div>
              <div className="flex mt-2">
                <h1 className="mr-3">Secondary Muscles:</h1>
                <h3>{exercise.secondaryMuscles.join(', ')}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExcercisePage;
