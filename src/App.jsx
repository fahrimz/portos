import './App.css'
import PropTypes from 'prop-types'

const Circle = ({ className }) => {
  return (
    <div className={className + ` w-3 h-3 rounded-full`} />
  )
};

Circle.propTypes = {
  className: PropTypes.string.isRequired
}

function App() {

  return (
    <div className='flex flex-col rounded-lg bg-zinc-700 space-y-0 shadow shadow-zinc-900'>
        <div className='flex flex-row space-x-2 m-2 p-2'>
          <Circle className="bg-red-500" />
          <Circle className="bg-yellow-500" />
          <Circle className="bg-green-500" />
        </div>

        <div className='flex flex-row gap-2 my-2 w-[70vw] h-36 sm:h-[50vh] border-zinc-500 px-4 text-sm'>
          <code>root@localhost &gt; code .</code>
        </div>
    </div>
  )
}

export default App
