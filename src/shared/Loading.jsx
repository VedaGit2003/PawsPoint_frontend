import React from 'react'

const Loading = () => {
  return (
 /* From Uiverse.io by devAaus */ 
<div class="h-full w-full flex-col gap-4  flex items-center justify-center bg-black">
  <div
    class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
  >
    <div
      class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
    ></div>

  </div>
  <h1  className='text-white'>Checking authentication.......</h1>
</div>

  )
}

export default Loading