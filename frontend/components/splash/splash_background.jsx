import React from 'react';

const SplashBackground = (props) => {
    return(
    <>
        <div className='overlay splash'>
            <div className="row"> 
                <div className="column">
                    <img src={window.img1} />
                    <img src={window.img2} />
                    <img src={window.img3} />
                    <img src={window.img16} />   
                </div>
                <div className="column">
                    <img src={window.img4} />
                    <img src={window.img5} />
                    <img src={window.img6} />
                    <img src={window.img17} />  
                </div>
                <div className="column">
                    <img src={window.img7} />
                    <img src={window.img8} /> 
                    <img src={window.img9} />  
                    <img src={window.img18} />     
                </div>
                <div className="column">
                    <img src={window.img10} />
                    <img src={window.img20} /> 
                    <img src={window.img12} />   
                    <img src={window.img19} />    
                </div>
                <div className="column">
                    <img src={window.img13} />
                    <img src={window.img14} /> 
                    <img src={window.img15} /> 
                    <img src={window.img11} />      
                </div>
            </div>
        </div>
    </>
    )
}

export default SplashBackground;

