import { useState } from 'react';
import Cards from './Cards';
import Pagination from './Pagination';
import exercises from '../exercise.json'

function Exercises() {
  const exercisesPerPage = 18;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="text-3xl text-center font-bold mb-7">Discover our collection of exercises</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {currentExercises.map((e) => (
          <div key={e.id}>
            <Cards ex={e} />
          </div>
        ))}
      </div>
      <Pagination
        itemsPerPage={exercisesPerPage}
        totalItems={exercises.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Exercises;
