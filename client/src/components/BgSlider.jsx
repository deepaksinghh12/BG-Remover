import React, { useState } from 'react'

const BgSlider = () => {

    const [sliderPosition, setSliderPosition] = useState(50)

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value)
    }

  return (
    <div>
      {/* Title */}
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>Remove Background With High <br /> Quality and Accuracy</h1>
    </div>
  )
}

export default BgSlider