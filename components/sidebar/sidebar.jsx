import React from 'react'

export default function sidebar() {
  return (
    <div class="flex flex-col w-80 rounded-bl-xl h-screen px-8 pt-7 py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700">
         
      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
        </span>

        <input type="text" class="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
      </div>
      
      <div class="bg-white dark:bg-gray-900">
    <div class="container px-1 pt-8 pb-4 mx-auto">

       
          <div class="flex gap-3">
            <a href="/dashboard" class="font-medium  text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
            <div class="min-w-50 h-fit px-8 py-3 space-y-1 text-center border-2 border-gray-700 rounded-lg dark:border-gray-700 hover:bg-slate-100	">

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEM0lEQVR4nO2Y21MTVxzHj4JCpaJAEgSVYMwGcKYXC7RRcuSh004v08fOdPrSTl/61hcRfaEprYxYSdIQRKi5mYRWH0pbbW21NUtrp38ExARMshvYzV6SqeJU8+skMFMkIUkdcuvkO/N72zP7/cw553c5CJVVVlllrRcmBUgVGpJ/qHHzFCaFmWNu/rjm94gUlRJAihAxyfchgC2oRAFgdWcu95JQiUoVAMch3LwJlTIAXoF4GZUyAHYLt1ExaK2pzmthUDpD0GgKQN3IXag57YXqQS/UDHmhQb8ALeYgvHCNXQXgY70ku6/Q/tHRX3no+JoBiSEAO88sQM3QPOw4PQ9PfeaD6k+9sP2TO7BN64HKjz1QMTCXMN/9YxienV6CF39iPiyYcbnWV113zn+yfiQAu876oXb4btYAeDVe+pmNqaZCFvQ2VOTVvERHvdEwEvDFze/+3P/EAHg1nv+eEVrsVGdWPz/kEJTtjugfKpsYI6zigtLCmwiLoMhmbd0wt0tioKwSPQUNuiBsFgAmBVDf5B4pnfSpjCY6nNGZdkcUVPYIEDYRlFYBFBZuWXGRO4W0sHWjddLRxedkBsojNdCQCwCcSK0CqFz0pQwAkeX1AActPCjMPLR+yU0hbXKVbDKF3m0cDd2TfUFDLgHwSnqFtq/obzcGcESZNAAgn2Qn137fbFrsaxoNxfaMhiAvAORKqFy0a6Mj9E16gDDsv8C+H2+69o4xuuaxJWgyLUK+ATRuAQhHcDAJoN0pvpkJoGWCYfeNM1f2nmcglwDqfh10H9WAul+fEuLIL1zsgDWIkyDaHNHf0gOwsP8CA7kG6O7B0NXVBV09eMOdOHx1KXJIC9uTUqnKHhEKDaDu1ycg1CcNGe5D0J60C0qr8AphE5YLCYCzjO7r7INkALvwaskCdEyJhMoWEQt9hHCWQbgo67/uAba0O6K3i+ES4ywifokfK65tDvGtYkmjOEMcucnFFJagZn0lns5YyCbZ9xKF7PzSSCELmdJFaf9zK9EywU6s/b55jDleiFaCcNHOJPOZmjn5ZNiZqplrNtHvNBpDf+WtmbtMT6c0v7IDETIJwMzfV5j5E+kenWSm0DMyAzWb63aacFEWlE7xKpxoJWziPaVV9B208ka5jW9FWajeyNZKDdRFiS4Y2/SB5kb4EeGi+lA+JDFQrzfoAt5NGym/Yzi5OXAY5VNK42xV3bnAid1n/fwTD/U3uIeEix5PNwnmXPXG2dqdw/6Pas8szGYL0PlD+H7bFDWtGPfIUNFIC1ul+vmeVhvl2TMWgPr4w9aQD6oG7/y9TTtHVQ7M3aoYmBs+cIn+ABWjOq8Gd2hI4dbj55t/0EtmlyCK0HwiLRpQ6Zrn/3ztOlShkjRP8ld6ycWnUbELuwU9Jvlw/Kxr3IIPu3nHsRkueQgvq6yyyvpf6B+PKAk35EzOSwAAAABJRU5ErkJggg==">              
</img>
                <p class="font-medium text-gray-500 dark:text-gray-300">Fishes</p>

               
              </div>
            </a>
            
            <a href="/dashboard/dashdish" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
              
            <div class="min-w-50 h-fit px-8 py-3 space-y-1 text-center border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-slate-200">

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFJklEQVR4nO2X609TdxzGeeVfQDeBKULb09NS7iCCDCbgiIEYXILZXjidzl3chbnNXXCvlrlhMNle7M2SvXDRFmhFsIACWTYzpsKk3IUCBeTSlkJbLgVdp/gs5xTKoRdOz8GBS/pNPq9OTvJ5fn2+v+YEBQUmMIEJzP92UFi4zX7wtfNzBwqNs9kFhqn0vNLaYNEFjUBorBFEGmqeE5Va9hVcsGXkGS3JWQaTPK20VrD6XBMsLFEFybZtWQD7wVdL5g8UYjanADOZ+WgjklAjEK6hPSoVtow8WHZnwxydjvYd8jXPNcHCki0LQJ/8srw1LRf12wmPAA0h5JoAo8IE9wCmLQtA1WZFfjopCw3bxR4BGkPdAkS6BRBETmxq52dzDp1f6bQ5fl+zlkikT56S/y2ERHdMOsxpuTAmvISOyDjcDI9GfYgEDSEEtBFxGEvJgSWnAFOZ+eiWp+K6QNS8aTthzz9cMrf/kOtEW3fFcup8b1ImmDtjTctFJ5G4eTsxn3/YyAxQ/zy3zlMnz5SfTsrChDx183ZiPu+wgRmAa+ep2jDlzTHpGCOS/7udcO/8dHJ2c7tsj6vTN8Nk6In13XmqYiPxma7nQ/K9YO5Ma3jMmufU+3UC4dPbCbbO9yZmgPnc2z3P3Ak+72s2shNsnbfmHvIQcL/nmTvB533NRnaCrfOWl1/xFHC755k7wed9DdedyDir+zajWOd4sViHvcV9SPuyD6lf9GLP571I+ewedp/pQfKZHiR92o3ET7qR8HEX4k93Iu6jTsQWdSCmqAPRH7ZD/kEbot5vg+w9LaSntCBPtULy7l0Q79yF+O2/IKJ4qwXCky2IPNmCiDebEXGiGbtO3EH48TvYefw2dr5xGzuO3cILx24h9GiTI/RI0zk/AvTbM87q8KwFCDv6J8KONM2zBsj8SnfuWf0Fwl5v+sbvKsU12rBCbAOFdZV6K2KY3Fgl+oYF0dfXIqeoc6N2GlFMapzIVtCsMEUTxHVYpevdpL2J+ykd5SHtFJdeW4VHgPVP239py/rSNZ6nzRSnqeYRwLu01T9pHhWRepEmGXAPsJFe15ghq5oAqRoBqRyERNkPiXIQUvUYZNWT60pLmeJVZhecA7BWpHYKUvUIpKphWtgpPgVZ5ThS1Hp8322D1uLA1MMlPAEwvvgYisF5ZFcPg1SNQlpt9nnaTHEJxVU+AVh6Lascw0+9M/jV+ADxKj1kVUaQFcP4WjsN+yNK2fs4lp7ghy4bSMUgyKrJdaWZcA7A1muyYgj3Fx7TUp1WBxIqdKgascPfaZxYRJRiAORVk09pSaUZBM3kBgL4WEZS2U+f5sqM2/8B16m+vwCRQu8hTjDEaa7wCMB2X0sUawMYFh9xDlA3ugDRZb1PaQrxMtwDsNzXkjI9xpYr1GNzIL6sDxd1c37L/254ANnlARBXTD6ladROOAdgu6+pm+Tnvln8YXqIuPJBSCoNECuHcLrJBMvfSz7FHy0BP3bZQFwaAKE2uMS9SVOIKFQmHgFY/mSkVZMQK/S0NFlpdN0gRMUYYpQD+E5rQZvFgRmHMwwVSj1kx/6rQxCXjYBQm1ilmXAO4CHt533tvD0mQVSMQ3RJD+FFHYiL9yD8RQexYhiEyuC3tEhlgrDCCf8A/kqvc4OsXxGTT2kX5TwCcJFeFV+W9rPXIhZpishyIw33AO7Sfp42F2kRizRNmRNeAXhVhEOvhQxxb9IUERRKDgECH/VFgY96PJWP+sAEJjCBCdqM+RfMgDSmLSSqNAAAAABJRU5ErkJggg=="></img>              

                <p class="font-medium text-gray-500 dark:text-gray-300">Dishes</p>

               
              </div>
              </a>
    
          </div>
          
        </div>
        <div class="container px-1 py-0 mx-auto my-0">

       
          <div class="flex gap-3">
                <a href="/dashboard/dishpoll" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
              
            <div class="minw-20 h-fit px-8 py-3 space-y-1 text-center border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-slate-200">

                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFRElEQVR4nO2Y2VNTZxiH2RPiP2B73ZlOZ4B2xlY708saBRQRsULYQUCQfaco9qbQaTu96lVnnOm0IFStkoU17BD2JXvY17jhgmj/gF/nO8nJOSc5cBJIuWm+mXP/PI/v971BPz/f8R3f8R3f8R32qTVE+1XprP5VOvhXzcO/cg7+FbMIKJ9BQPkUAsomEVg6gcCScQSWjCGweBRBRSMIKhxGUOEQggoGEXyzH8H5fQjO70VInhohN7oRktuFkNxOiHI6IMpuh+i6EuIsBcRZcogz2yDOeIzQ9L8Rmv4QoWkPEJp6H5KUVkhSWiBJvocTsmarJKE5yk/w1BisftUEXuskMI2AMieBYg1XgMAXDDACeUSghxHIoQVUTgKPIc54xBGQpP5lE0i2CyQ144Tsz203BPRwCFTaBAIqZngExpwEhngESH1GQEQESH22QGYbVyCNCNznEWgiAvBcgNRnCxD4Unp8NAgqIgLs8aEFep0EWOPjEJAz4+MQsI+PQ+AeJKS+2wLVevg7BOacBCZ5BJznf8Bp/nt45p8IKHgEHjoJsMfHTYH6xX/g/N1eeI9blveos7zDt+Y91Jr2UGN6i2rjW1QZdlGpf4MK/RuU616jTPsKpdpXKJl/ieK5lyia20Hh7AsUzLzAzZnnyJ9+jrypZ7gx9RS5k0+RM/GE+rLHrbg+to0szTYyNVvIGN1C+sgm0kY2kDq8gZShdSQPrXsmQIEv0ODvUGtmgRt3UWnYdYA74Odp+B0UzbLgpwn8Mxv8JAOfTcDHrcgaI+DbNvBRAr5pAx/eoMCTBteoz20BweoGVnXda57qOzzV7fCc6lY7PLv6Jqc6AZcNrCFxYFVYQKg6MzKs6tojVtdwqzvg7dVlA6tI7F9FQv+KsMChqs+7Vqfgp1jwB1Uf5VYntT//7gGkd0eo6gT8Wt8KvulbFhZgqu+hxkjgdz27qNOskeFUf8JTfcvlosr61xBe8QdOxjbgw7hGxHdZbPC9y7jauyQs4Gl1ZmQOVz15cB0XW6aoWSdjEmaHJ9+ZRjlV/SqBVy8hXr0oLMBXXXzHAr9ak1e+kHozp/pn1c0U7JeNcoSVO8Hbq8erl3ClZxFxPW4I2Krvcqp7C57+2M/jp3YB9ueAV7PguxdwuXtBWIBv1kVe/BcQ3TFznsfE/hVEVDcx8A1tLtUJeGyXBZe6LMICx7mUZPbnkdSOqGrC6e+d4O3VKfhOC2I6zcICZdrjW0oJrOeRXFQKXM2uTsObEdNhxsUOk7DAkatrXKvvt5Su9S3zXFTX6gT8QrsJ0e1GYQFvLyVPqsdxRoapTsGrjIhSGYQFvLmUyBvvWp1ZSvH7XNQLCgM+Kf0dZ37poKpHqYyIVBpwXumGwFGWkm1khKvTS+kKT3UC/1Heb9SL9EFsI849mrfBK/Q4p9ALC3Au6gHVD/rN7kn1GKURX/2qpsYlWs7An7zcgNM/qxh4uQ5SuU5YgHNRJ2zwonqz1/ZA8G0Tp/rHhXcp4LDaZg78Fz+pcF5pq07Ape4KsP9SItXJyHh7E9OzHtNpRkRdK3cT0/DUyDDgbgtwnkf7rJPfL977LWTiPo8qE8LrWhzwp35UuFT3SOC/XEqX9nselQaE32rFqR/kB8K7JXCcSynK8Ty6zvqhBY5zKUWynkd34N0SoJdSmpeWkq26mae6gQKnn0evCXhzKXFG5gjVpZ4IpI1sWA+7lFyqdzDVOfCHAJfKdTgr1wr/527S0EZU8uD6NgU+SFdfpcAdF5XnLyVvXlTpPvBfK3SRggK+4zu+4zu+8786/wLlOrgPlGKL2QAAAABJRU5ErkJggg==">
                                  </img>
                <p class="font-medium text-gray-500 dark:text-gray-300">Poll</p>

               
              </div>
              </a>
            
            <a href="/dashboard/dashseller" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
              
            <div class="minw-20 h-fit px-8 py-3 space-y-1 text-center border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-slate-200">

                              <img src="data:image/png;base64,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">
    </img>                              

                <p class="font-medium text-gray-500 dark:text-gray-300">Sellers</p>

               
              </div>
              </a>
    
          </div>
          
    </div>
</div>

 

    <div class="flex flex-col justify-between flex-1 mt-8">
        <nav>
            <a class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-800 dark:text-gray-200" href="http://localhost:3000/">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Home</span>
            </a>

            <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="http://localhost:3000/profiledet">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Accounts</span>
            </a>

         

          

            <hr class="my-6 border-gray-200 dark:border-gray-600" />

         

          <a href="http://localhost:3000/profiledet" class="flex items-center px-4 -mx-2">
            <img class="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
            <span class="mx-2 font-medium text-gray-800 dark:text-gray-200">Jamal</span>
        </a>
        </nav>

       
         <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="http://localhost:3000/profileedit">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Edit Accout</span>
            </a>
    </div>
</div>
  )
}
