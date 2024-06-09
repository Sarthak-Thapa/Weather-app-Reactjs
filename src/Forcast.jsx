
const Forcast = () => {
    const Forcasting = [1,2,3,4,5];
  return (
    <div>
        <div className="flex mt-6 flex-row">
            <p className="text-1xl font-medium uppercase">3 hour step forcast</p>
        </div>
        <hr className="my-1"/>

        <div className="flex items-center justify-between">
            {Forcasting.map((forcasting, index) => (
                <div key={index} className="flex flex-col items-center justify-center m-0">
                <p className="text-sm font-light">Wed</p><br />
                <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather-icon" className="w-12" /><br />
                <p className="font-medium">12*</p>
            </div>
            ))}
            
            
        </div>
    </div>
  )
}

export default Forcast