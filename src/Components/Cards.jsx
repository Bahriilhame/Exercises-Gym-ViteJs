import { Link } from "react-router-dom"

function Cards({ex}) {
  return (
<div key={ex} className="rounded overflow-hidden shadow-lg flex flex-col">
                <Link to={`/exercises/${ex.id}`}></Link>
                <div className="relative"><Link to={`/exercises/${ex.id}`}>
                        <img className="w-full h-64 object-cover"
                            src={ex.images[0]}
                            alt={ex.name}/> 
                        <div
                            className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                        </div>
                    </Link>
                    <Link to={`/exercises/${ex.id}`}>
                        <div
                            className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                            {ex.category}
                        </div>
                    </Link>
                </div>
                <div className="px-6 py-4 mb-auto">
                    <Link to={`/exercises/${ex.id}`}
                        className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
                        {ex.name}</Link>
                    {/* <p className="text-gray-500 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p> */}
                    <p className="text-gray-500 text-sm line-clamp-2">
                        {ex.instructions[0]}
                    </p>
                </div>
                <div className="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <svg height="13px" width="13px" version="1.1" id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 512 512" style={{ enableBackground:"new 0 0 512 512" }}
                            xmlSpace="preserve">
                            <g>
                                <g>
                                    <path
                                        d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                        {(()=>{
                            switch(ex.level){
                                case 'beginner':
                                    return <span className="ml-1 p-1 rounded-md px-2 bg-green-400">{ex.level}</span>
                                case 'intermediate':
                                    return <span className="ml-1 p-1 rounded-md px-2 bg-orange-400">{ex.level}</span>
                                default:
                                    return <span className="ml-1 p-1 rounded-md px-2 bg-red-500">{ex.level}</span>
                            }
                        })()}
                    </span>

                    <span href="#" className="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
                        <svg className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                            </path>
                        </svg>
                        <span className="ml-1">
                            <span>{ex.primaryMuscles.join(' ')}</span>
                            {ex.secondaryMuscles.length > 0 && (
                                <span className="ml-1">
                                - {ex.secondaryMuscles.slice(0, 1).join(' - ')}
                                {ex.secondaryMuscles.length > 1 && '...'}
                                </span>
                            )}
                        </span>
                    </span>
                </div>
            </div>  )
}

export default Cards
