import React from 'react'

const TopButton = ({setQuery}) => {

  const cities = [
  {
    id: 1,
    title: 'London'
  },
  {
    id: 1,
    title: 'Sydney'
  },
  {
    id: 1,
    title: 'Tokyo'
  },
  {
    id: 1,
    title: 'Toronto'
  },
  {
    id: 1,
    title: 'Paris'
  }
]

  return (
    <div className='flex items-center justify-around my-6'>
      {
        cities.map((city, index) => (
          <button key={index} className='text-white text-lg font-medium' onClick={() => setQuery({q: city.title})}>{city.title}</button>
        ))
      }
    </div>
  )
}

export default TopButton;