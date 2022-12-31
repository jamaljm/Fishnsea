import React from 'react'
import Fishsellercard from '../dashboard/fishsellercard'
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function dashboard() {

     const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=10.2695871&lon=76.3995414&appid=bfdc9a91eab2d259c7606759452bc4c9';

  
  const [apiData, setApiData] = useState({});

  React.useEffect(() => {
      axios.get(apiUrl).then((response) => {
        
          setApiData(response.data);
          console.log(response)
      // console.log(response)
    });
  }, []);
    
    

  return (
      <>
          <div className='flex w-full rounded-br-xl px-5 overflow-hidden gap-5 bg-white'>
                       <div className='flex py-5 mt-2 flex-col h-screen gap-6 overflow w-1/5 '>
                 <div className="flex flex-col items-center p-8 bg-slate-200 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<div className="text-center">
		<h2 className="text-lg font-semibold">{apiData?.name}</h2>
		<p className="text-sm dark:text-gray-400">Dec 29</p>
	</div><br></br>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAElEQVR4nO1a+2+TVRg+p+NS4wzaxK2TLc5tDIkOSNQRspGNwa/4R6ghYoyCEjECmzHEEGAxgEaNUSQKRIwhOgYtYzd2IWs7MDhhY5Ay7oMBu3dd2R7znDOWj7qWlnX90PAlX9Z8l/M+73fe857nfd4J8fj4Hx9wWNfzFI/ygQPiaTith1GRmD9+DcKCensx6lOgT3sJr43fdybmwWEt57umAR8HU23biHo7cDwNaHqhGZ6s/WjOPouT84A/x07+bs5uU/dc6R71LN+psRWbC/747PloyujHiReBUzlAy0Lg9CtA62tA26L7T17jPT7DZ/lOU0Y/GlNz4gO2RFjUtFfZtqIhZR3cGV/i5Lx+BYjg2hcD55cA3kKgowi4uAy4tFyf/M1rvMdn+CzfaVnI2emHK2OnGrPKtgVO60Hair0DDmsajiUBTc/rkKBxftnz+cCFpRjtKMDI6RwE3LPhr52FIecM+A5aMFhmga9sBnzOWfAfS0XgZA5GvQXqHfBdjqEd0WPTRvUTqbF3oD7pdbgz9fSfeRU4l6e+6mh7LgKuZPiPSgw5BYYOC/jKBXxlAoO/CwweEBj4TWDgV4H+XwT69wn07ZXwHU7G3ZZcPTMci2NybNqoS14RW/D7RQI8mTX4a4H+Yt4CjHrzEXA/C3+lgL9CRA5+j0DfTwK9uwV6dwkM/pGEkbP5akw1Nm14sqpoc3KgIaQKG355guc0n12spn6kdT6Ga6dNGnzv9wI93/HvNAy7Fuiwog3a8mRVK9vEACGjd8BpLVPxyCnlV+HAHUUY+XsuhqtFzMD3fCvQ/bVE91cSg0eydEjRFm3SNjE4rOXRO8Bsw0XFuOTUXliKuy1zpgz8nZ0Sd7ZL+I7O0TNBm7RNDFW2rdE70JiyWmUGLi5vgQ6bKQZ/+wuJ26US/sYFek3QNjE0pqyO3gHmZsbiuTy1YIdrE+IC/tZW/p2Ou61LdHYiBlfGjuh3WG4wnMaOophkm0jB39os0fW5RO/uZL0eiIFYGlJfjoyY1diK1RZPz8/nY/RcbtzBd22SuPmZxHDz2EZJLMRE3hWOACqqQJJFnsKt/sJSBJqSTAF/81OJ7h/sekETCzERm8N6KLQDVU8tQmPaqFr97YsVPYhqh40h+BvFPC0YaS/U3ImYyGIrniwMH0audLcOnyWK25gGfoNE5ydMq/M1AVSLOd394HXgydyraK+3UBEzM8F3fizRsztNs1hi8mTuCQ+elRSLEcZcR5FilWaCv/6RxK1tz+hsREzN2a1haYUq/bhxMHVdXKYpsYngr6+V6NwwU9cTOp0CdfaNE4N3WNep+pUlIB++tBy+coup4K99IHH9wwRdFBETsRGjc+bmiBxgMWIm+GurJa6tmcABh7UkVAgVG0OIlZSZ4K++x2tBIVRvL37QIm67t4hZBpoJ/uq7Ejc2GRbxiblnHlgbwJO1714aZQ1rJvgr70jc+caQRt2ZP4cFrxygtjO2kbEANxP8lbclBg4ZNrKmdFd48BWJ+Wq7vkclvAWqADcL/JVVCRhpC6ISRxILQjvgsB4KJnNUD8wAf3mlRNe2CclceXg6TcpqoNOUPswAf/ktiaHGIDpNqh+Jnkq5z1jQUPqIN/ibW+zGgqYvooImVElJ3YbSR7zAX141HYFTxpIyc3tU4JUD9bPXGIt66jbxAH/pTYkBx8L7i/qGlPejd6DaVhosq/gq50wt+DckevZmx0hWYXk5gbDlq5o7ZeC7d4UQtpzWsoeXFuuSVyit0iAtUreh9BHLmB9g2BilRXdWpbL9sNJikDMWpVUaxF3qNpQ+YpFtAlywRnGX4A0tqSmV1yl9UD1gAR7NDttVmgL/8UXxkdcjaXBQPWAB3vNjmioDO9fPVMUI+TwpMVkliRm5jaIHcW9wlAiLav+wDUTd1JWxI0Ytpj7meTQ8t1YJykweU9FiCrljT7bJV5f2UlzAhnSC/GS8zZruGmuztv6rzcpiJLjNWm2buECPqwMkgJx2Z2LefSnY2Oius280pkJF29kcP/AINLr/8/9q8PgQkzv+AbK5jiVMiw2rAAAAAElFTkSuQmCC">
                      </img><br></br>
	<div className="mb-2 text-3xl font-semibold"> {Math.round(apiData?.main?.temp-273)}°C
		<span className="mx-1 font-normal"></span>
	</div>
                      <p className="dark:text-gray-400">temp</p>
</div>
    
                   <div className="flex flex-col items-center p-8 bg-slate-200 rounded-md w-60 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
	<div className="text-center">
		<h2 className="text-xl font-semibold">{apiData?.name}</h2>
		<p className="text-sm dark:text-gray-400">July 29</p>
	</div><br></br>
	                      <img mt-10 src="data:image/png;base64,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">
</img><br></br>
	<div className="mb-2 text-3xl font-semibold">{apiData?.wind?.speed}
	</div>
	<p className="dark:text-gray-400">Wind Speed</p>
</div>
              </div>
         <div className='flex py-5 flex-col mt-2 h-screen gap-6 overflow w-/5 '>
                 
    
         
              </div>
              <div className='p-6 w-full rounded-md'>
                  <iframe
                      className='rounded-md'
          src="https://embed.windy.com/embed2.html?lat=11.081&lon=76.070&detailLat=11.081&detailLon=76.070&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
          width="100%"
              height="85%"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="10"
        />
        </div>
              </div>
      </>
  )
}
