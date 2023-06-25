import Navbar from './components/Navbar';
import Tag from './components/Tag';
import Search from './components/Search';
import Activities from './components/Activities';

function App() {
  return (
    <>
      <Navbar/>

      {/* Search row */}
      <div className='w-full mt-4 sm:mt-8'>
        <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-row items-center justify-between'>
          <Search/>
          <button className='text-[#142c8f] ml-4 sm:ml-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Filter row */}
      <div className='w-full mt-2 sm:mt-4'>
        <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <span className='text-xl font-semibold text-gray-800'>Filter by</span>
          <div className='flex flex-row items-center justify-start mt-2 gap-4'>
            <Tag text='Date: Last 90 days' active={true}/>
            <Tag text='Type'/>
            <Tag text='Status'/>
          </div>
        </div>
      </div>

      {/* Activity content */}
      <div className='w-full mt-4 sm:mt-8'>
        <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
          <p className='text-xl font-bold text-gray-900'>Completed</p>
          <p className='text-xl text-gray-600 mt-4'>This week</p>
          <Activities/>
        </div>
      </div>
    </>
  )
}

export default App;
