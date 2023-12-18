import exercises from '../exercise.json'
import Cards from './Cards'

function Exercises() {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <div className="text-3xl text-center font-bold mb-7">Discover our collection of exercises</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {exercises.map(e=>{
            return ( <div key={e.id}><Cards ex={e}/></div>
            )
        })}
        </div>
    </div>
  )
}

export default Exercises
