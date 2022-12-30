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
            <a href="/dashboardfisher" class="font-medium  text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
            <div class="min-w-50 h-fit px-8 py-3 space-y-1 text-center border-2 border-gray-700 rounded-lg dark:border-gray-700 hover:bg-slate-100	">

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEH0lEQVR4nO2ZW2zbVBjHTZ3YicOmMbEHJMS4aEIajId19fHJKipBgVaDDTQmAVq5vFQdIBUemJBAFUJIXMZTxZDLCyDQgAo2JrHFuTiJ7cRxbK8jBYTUB8QuIB5B8MJl+9A5bbTEadq4SUrH/Ek/KbLP+b7/30n+J1IYJqj/ac1idt838Z7zhG8x+zBzOVUF94xX4uyF2TgLhEqcvVjB7CvMWi9gmKu+xuxbFcxCEyaBYXqYtVhzQwx/Wgp9chqHYClmcOioKTFR735ZlotTU1PgwVgV8bP9zDUzEqvNzAtcHoktub3MtbU9FhFP6br4Uziy2cWh707hMHix9myhLHZvfk9kc7WP67qwGF0Vb+Pw7S4OnXOpoHrMx3aAcuxzUI4fheIIbrhPkcI/u1J4+39iwML8XWXM/WpjDrzoY0OQPHkCDMOgJJUE6M/ublhnYw7KEve7jbjhVTVgo/B+S+L+LEtUwCUwD7mDI5BKpaBYLILjOBTymlxTJw7QNQ37EPe3MzmxOgZKiBsvSdwFS+KgltJOATKvvwDpdBpM02wQQq6pqgqZt18Cq//qur0WAfNgv3qgewam9zGsKXHvlCQevJh3boDU5GtU4GLiq5RKJbomdfhNMAc2NvQhlJ/fC65d7qyBk0MMbyJ+2iRiPRTuuQ6S7x+GbDYLlmU1FV+FrMnlcqB8IEPhvusb+hGs0UFwzUJnDJjS+o0FiTcKUgS8aLtvheRnH0M+n4dy+dJTWw6yluxRpo+A9tDWhr4E85Ht4OQz7RnQRP4mXYx8b6AIeMk9ikD58gvQNA1s225ZfBWyR9M0SBw/BrmR/ob+hMKuWyCPuC0rEq+j2B2aGDmvoyh4UcfuB+XEVzQiVyK+1oSxELPqMw82zKGIkV8MJPT6Ep+T+ME8iv6moSjUIQmQPvgEjUQymETkSsVXcRwHCoUC7ZmaeBryklA/c54/NFHY1ZJ4VRQezyLhrxwSoI74eki+8SKNyWrGtyverTFBepLeyqGXIbdzQ/1sgij8k0XC6JLiM2L0ORUJF7NIgFrUgU2gvHto2ZhsF3PhrKCzBjZBgw6qLTre3AASVBXFoJbMvTdC4sP3ui7erTkrSCSTmWS2V48qCummBtK9kRsyYuxMRowBIf3AVkh8+hHN7VYyvlNYC2dFYvoIpPZso1oofbGf0jv4m5f8GCX6YrclxdgZ5alBGnF+M75T2DUxqzx5NyT7Yj8SbUyrpSgK6LreVkx2woSu60C0MH6r3YzvpAnDMPwb8BuTc6MS/DC8riXmxuK+ejuO49+A3yfVqvgqfvszgQE3eAcg+Aj5qeBLPBykEAQx6gYH2brgJHav2J8SU03+cGiGXwN++zNXnAFZls+tIQNnV/IODPsx0UUDZ2VZHvJtIKiggmIui/oX2lR7CRtrfm4AAAAASUVORK5CYII="></img>
                <p class="font-medium text-gray-500 dark:text-gray-300">Home</p>

               
              </div>
            </a>
            
            <a href="/dashboardfisher/dashboardadd" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
              
            <div class="min-w-50 h-fit px-8 py-3 space-y-1 text-center border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-slate-200">

<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFVklEQVR4nO2XfWwTdRjHL0SJJkbjHxoNIfxBEJlsjI11617aXd/n1nUbg6hoECS+RA3+oyQE3R9GDTFBEhOjmBiNCUaIfxAlBFHbMTbpceva3l17Xd+u19d7aa/jJSxj7jHXraWwN1gYrEm/yfPfXfv9PPf8nuf5IUhZZZVVVlll3WOBWv0QUqq63Na7b8y4ncrodjyBlKKyhh73mKEHJK3lbMl9icvG7S1j+m7Iarsgq+kESd1xFCklSdru41mtBSS0E6TWDsio2iHTbHoHKQVdNu14SkIt4xJqljMPmZYXId1kAlFpnBDqdFpkpSurMR+UWs3TWZ8xn24wgKjQAV+Lpvkq7XPIShX09a3KtLaHp0umDdKNRhAb9CAqtCBs0wC/tRW4LSo6W9n8JLISlVW36wpZVxpBrNeDWKcFoRYFfqsa+C0twFU2QbJC+eeydKYxXdc/WdTiEDXta5byvqgwPS42mo7nSyaX9cY2YN89AIGvfwDfqXNA4hS4ySC4RqPg9LGTDl8k7aAZn8PLnHF4mSM4yezCPcyzSwOQW5/GApKqg+FVug1L+hEEQQRVhzn23oF04MRpoGgWyFASiGACiEAc3IE4uPyxaYDRKIz4WBihI+CQw8vAsCcMuBxkiMCI4MFhKrTu7gHUHXL9JjP1mqq7Me5jxTUehu/zMBzrYTigwimgQsmlAVAhuEQGwU4EpoaGPV4bRvYBwKo7B2gygaDQZsQadcNC75AkrKZZocvDcKc8DDfpjfAgm7+HAGC1u8B60QW2i8RVK+bec8cAYr1OPoBXUpXNuuLnWJZ9dDQmmGlWPOaNCDzNCiAbz8e9BBgcoXPmi6MfI7x/D1OzSyur6+JuB+AVekh07hoP/XjyC19UPDwaFS/QUXHcFxVBDtn8cgKcx6lZANPhnhjACPMtAJK+u1fSWK7nAWJffQ/+UAr88UwuRmPpXOTN3w8Am91dMB3fux/C3buLIJxT/Xbi0C0QGbRTJQMIO/ZCICEVzD8oAOvFIoB9+yHc8/ptX8I5deIEufpmGWnNphxA754VAWCbOcDzxr/OKSvA9FAc0/W8Jmk6JwoldOTbB15C/UUlNCvsLrBh7k9vZl/fLc7qQg0GSLz05rXQmf5vfFHxd180fe1+Agzg5DyZd03ZLhEfLdpG+VpUSm1WKfPPhMPhR+houo1mhZ98/tjkUgFSe96HtNIAQp02tyfJO1JqUwMkNmyD4MtvFQCGnLPbqM3uvtGPk7sXnwMKXYqrRrfMNzf4Oi2wH3wMfht2424BckvfPAARpenmICMDYLtlBpCBfoxYu+ggExtNEb5+4X0ot2VWq4Graob4zjfA/+sfU94Z80sBiOl7wffJYRgZwAsAGBmECw6PnPWJ85eozxfyUwDIqNrpdIthbsoiyeuybECoaQW+WgVcZTPEza/EvIMj5zxMamIhAKFtZw4gYXkVAp8dBfdfg3OeAYwMOO3uwNtWknxsMT9IVt91Oot2nr+i7H560YflmSFfWpQzt61t6H9ctfo7rkKd+yPCH1tLhpNfksFEfC4AasgJlBWb+xBT4TGcDP6CuUNqZDmVv/OKjUaX2GBQzPWMvEES4SRKDTqOeX87c93t9F13eSMT012IveGgWW7EG/EM05GTw17mEE4yGhzHH15W4wUArcUvoR0fLnS7AgRZldzU9ELy+XosuaEOEutrILauOoWUiritqmjuKrm5CVIVSkhuVEB8fe3PSKlIVGjGi7sVV6G8GtvYuBEpFYlKw2S+W/E1rRJX1WJESkmZlvZopsnkEZWGw1yd+pkH7aesssoqq6yykJWo/wE1UHevzJc0QQAAAABJRU5ErkJggg==">
      </img>          <p class="font-medium text-gray-500 dark:text-gray-300">Intrest</p>

               
              </div>
              </a>
    
          </div>
          
        </div>
        <div class="container px-1 py-0 mx-auto my-0">

       
          <div class="flex gap-3">
                <a href="/dashboardseller/bidding" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
              
            <div class="minw-20 h-fit px-8 py-3 space-y-1 text-center border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-slate-200">

                              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFRElEQVR4nO2Y2VNTZxiH2RPiP2B73ZlOZ4B2xlY708saBRQRsULYQUCQfaco9qbQaTu96lVnnOm0IFStkoU17BD2JXvY17jhgmj/gF/nO8nJOSc5cBJIuWm+mXP/PI/v971BPz/f8R3f8R3f8R32qTVE+1XprP5VOvhXzcO/cg7+FbMIKJ9BQPkUAsomEVg6gcCScQSWjCGweBRBRSMIKhxGUOEQggoGEXyzH8H5fQjO70VInhohN7oRktuFkNxOiHI6IMpuh+i6EuIsBcRZcogz2yDOeIzQ9L8Rmv4QoWkPEJp6H5KUVkhSWiBJvocTsmarJKE5yk/w1BisftUEXuskMI2AMieBYg1XgMAXDDACeUSghxHIoQVUTgKPIc54xBGQpP5lE0i2CyQ144Tsz203BPRwCFTaBAIqZngExpwEhngESH1GQEQESH22QGYbVyCNCNznEWgiAvBcgNRnCxD4Unp8NAgqIgLs8aEFep0EWOPjEJAz4+MQsI+PQ+AeJKS+2wLVevg7BOacBCZ5BJznf8Bp/nt45p8IKHgEHjoJsMfHTYH6xX/g/N1eeI9blveos7zDt+Y91Jr2UGN6i2rjW1QZdlGpf4MK/RuU616jTPsKpdpXKJl/ieK5lyia20Hh7AsUzLzAzZnnyJ9+jrypZ7gx9RS5k0+RM/GE+rLHrbg+to0szTYyNVvIGN1C+sgm0kY2kDq8gZShdSQPrXsmQIEv0ODvUGtmgRt3UWnYdYA74Odp+B0UzbLgpwn8Mxv8JAOfTcDHrcgaI+DbNvBRAr5pAx/eoMCTBteoz20BweoGVnXda57qOzzV7fCc6lY7PLv6Jqc6AZcNrCFxYFVYQKg6MzKs6tojVtdwqzvg7dVlA6tI7F9FQv+KsMChqs+7Vqfgp1jwB1Uf5VYntT//7gGkd0eo6gT8Wt8KvulbFhZgqu+hxkjgdz27qNOskeFUf8JTfcvlosr61xBe8QdOxjbgw7hGxHdZbPC9y7jauyQs4Gl1ZmQOVz15cB0XW6aoWSdjEmaHJ9+ZRjlV/SqBVy8hXr0oLMBXXXzHAr9ak1e+kHozp/pn1c0U7JeNcoSVO8Hbq8erl3ClZxFxPW4I2Krvcqp7C57+2M/jp3YB9ueAV7PguxdwuXtBWIBv1kVe/BcQ3TFznsfE/hVEVDcx8A1tLtUJeGyXBZe6LMICx7mUZPbnkdSOqGrC6e+d4O3VKfhOC2I6zcICZdrjW0oJrOeRXFQKXM2uTsObEdNhxsUOk7DAkatrXKvvt5Su9S3zXFTX6gT8QrsJ0e1GYQFvLyVPqsdxRoapTsGrjIhSGYQFvLmUyBvvWp1ZSvH7XNQLCgM+Kf0dZ37poKpHqYyIVBpwXumGwFGWkm1khKvTS+kKT3UC/1Heb9SL9EFsI849mrfBK/Q4p9ALC3Au6gHVD/rN7kn1GKURX/2qpsYlWs7An7zcgNM/qxh4uQ5SuU5YgHNRJ2zwonqz1/ZA8G0Tp/rHhXcp4LDaZg78Fz+pcF5pq07Ape4KsP9SItXJyHh7E9OzHtNpRkRdK3cT0/DUyDDgbgtwnkf7rJPfL977LWTiPo8qE8LrWhzwp35UuFT3SOC/XEqX9nselQaE32rFqR/kB8K7JXCcSynK8Ty6zvqhBY5zKUWynkd34N0SoJdSmpeWkq26mae6gQKnn0evCXhzKXFG5gjVpZ4IpI1sWA+7lFyqdzDVOfCHAJfKdTgr1wr/527S0EZU8uD6NgU+SFdfpcAdF5XnLyVvXlTpPvBfK3SRggK+4zu+4zu+8786/wLlOrgPlGKL2QAAAABJRU5ErkJggg==">
                                  </img>
                <p class="font-medium text-gray-500 dark:text-gray-300">bidding</p>

               
              </div>
              </a>
            
            <a href="/dashboardseller/boat" class="font-medium text-blue-600 dark:text-blue-500 hover:text-gray-800 no-underline">
              
            <div class="minw-20 h-fit px-8 py-3 space-y-1 text-center border border-gray-300 rounded-lg dark:border-gray-700 hover:bg-slate-200">

<img src="data:image/png;base64,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">                               
</img>
                <p class="font-medium text-gray-500 dark:text-gray-300">Boats</p>

               
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

         

          <a href="/dashboard/profile" class="flex items-center px-4 -mx-2">
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
