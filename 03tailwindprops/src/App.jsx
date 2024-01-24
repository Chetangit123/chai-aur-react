
import './App.css'
import Card from './Card'

function App() {
  let details = [{
    name: "Chetan Parmar"
  },
  {
    name: "Yash Tiwari"
  }]

  return (
    <div>
      <h1 className='bg-green-400 text-blue-600 p-4 rounded-lg mb-4'>Tailwind CSS</h1>
      <Card details={details} />
    </div>
  )
}

export default App
