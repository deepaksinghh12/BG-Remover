import React from 'react'

const Header = () => {
  return (
    <div>
        {/* Left Side */}
        <div>
            <h1>Remove the <br/> <span>background</span> from <br/>images for free.</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br/>
            Lorem Ipsum has been the industry's standard dummy text ever.</p>
            <div>
                <input type="file" name="image-upload" id="upload-file"/>     
                <label htmlFor="upload-file">
                  {/* Add your text or icon for the button here */}
                  Upload Image
                </label>
            </div>
        </div>
        
        {/* Right Side */}
        <div> 
          {/* Right side content goes here */}
        </div>
    </div>
  )
}

export default Header