import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const TempAndDetails = () => {
    const tempDetail = [
        {id: 1, Icon:CiTempHigh, title: "Real Feel", value: "14*"},
        {id: 2, Icon:WiHumidity, title: "Humidity", value: "81%"},
        {id: 3, Icon:FiWind, title: "Wind", value: "2 km/h"},
    ];

    const sunRise = [
        {id: 1, Icon:GiSunrise, title: "Sunrise", value: "05:33 AM"},
        {id: 2, Icon:GiSunset, title: "Sunset", value: "08:33 PM"},
        {id: 3, Icon:FaArrowUp, title: "High", value: "37*"},
        {id: 4, Icon:FaArrowDown, title: "Low", value: "7*"},
    ];
  return (
    <div>
        <div className="flex flex-row items-center justify-center">
            <p className="text-2xl my-3 font-thin text-cyan-300">
                Rain
            </p>
        </div>

        <div className="flex flex-row items-center justify-between py-3">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="weather-icon" />
            <p className="text">
                34*
            </p>
            <div className="flex flex-col items-start">
                {
                    tempDetail.map(({id, Icon, title, value}) => (
                        <div key={id} className="flex flex-row justify-center items-center text-sm my-1">
                    <Icon size={20} className="mr-1"/>
                    {title}: <span className="ml-2 font-light">{value}</span>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="flex flex-row justify-center items-center">
            {
                sunRise.map(({id, Icon, title, value}) => (
                    <div key={id} className="flex items-center text-sm mx-3">
                <Icon size={20} className="mr-1"/> 
                {title}:<span className="mx-1 font-light">{value}</span>
            </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default TempAndDetails