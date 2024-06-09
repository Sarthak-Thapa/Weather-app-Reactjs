
const TopButton = () => {

    const city = [
        {id: 1, name: "London"},
        {id: 1, name: "Sydney"},
        {id: 1, name: "Tokyo"},
        {id: 1, name: "Paris"},
        {id: 1, name: "Toronto"},
    ];

  return (
    <div className='flex items-center justify-around my-6'>
        {city.map((city) => (
        <button key={city.id} className='px-3 py-2 text-lg font-medium hover:bg-gray-700/20 rounded-md transition ease-in'>{city.name}</button>
        ))}

    </div>
  )
}

export default TopButton