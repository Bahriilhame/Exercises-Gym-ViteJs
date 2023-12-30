import exercises from '../exercise.json'
import { useParams } from 'react-router-dom'

function ExcercisePage() {
  const {id}=useParams()
  const exercise=exercises.find(e=>e.id==id)
  return (
<section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-9 py-24 mx-auto">
    <div className="lg:w-5/5 mx-auto flex-wrap">
<div className="max-w-2xl mx-auto">

    <div id="default-carousel" className="relative" data-carousel="dynamic">
        <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96 ">
            <div className="duration-700 ease-in-out" data-carousel-item>
                <span
                    className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First
                    Slide</span>
                    {console.log(`.${exercise.images[0]}`)}
                <img src={`.${exercise.images[0]}`}
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt={exercise.name}/>
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={`.${exercise.images[1]}`}
                    className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt={exercise.name}/>
            </div>
        </div>
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1"
                data-carousel-slide-to="0">1</button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                data-carousel-slide-to="1">2</button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                data-carousel-slide-to="2">3</button>
        </div>
        <button type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
                className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span className="hidden">Previous</span>
            </span>
        </button>
        <button type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span className="hidden">Next</span>
            </span>
        </button>
    </div>
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
</div>


      {/*  */}
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{exercise.category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{exercise.name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>

        </div>
        <h4 className='text-blue-700'>Instructions :</h4>
        <p className="leading-relaxed">{exercise.instructions}</p>
          <div className="mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <h1 className="mr-3">Primary Muscles</h1>
            <h3>{exercise.primaryMuscles.map(p=>p)}</h3>

            <h1 className="mr-3">Secondary Muscles <h3>{exercise.secondaryMuscles.map(p=>p)}</h3></h1>
            
          </div>
        <div className="flex">
          <h3 className="mr-3 text-2xl">Primary Muscles</h3>
          <span className="title-font font-medium text-2xl text-gray-900">
          <h3>{exercise.primaryMuscles.map(p=>p)}</h3>

            <h1 className="mr-3">Secondary Muscles <h3>{exercise.secondaryMuscles.map(p=>p)}</h3></h1>
          </span>
        </div>
      </div>
    </div>
  </div>

</section>
  )
}

export default ExcercisePage
