import React from 'react';

class BoardShow extends React.Component{

    constructor(props){
        super(props)
    
    }

    componentDidMount(){
        this.fetchPosts(this.match.params.boardId)
    }
    

    render(){
        const pins = this.props.pins.map(pin => {
            return (
                <PinIndexItem
                  key={pin.id}
                  pin={pin} />
            );
          });

          return (
            <div className='board-show'>
      
              <span>
                <div>
                  <h1>{this.props.board.title} </h1>
                  <h3>0 Pins &#8226; 0 Followers</h3>
                </div>
                <div>
                    {this.props.board.description}    
                </div>
              </span>
      
              <div>
                <ul>
                  { pins }
                </ul>
              </div>
      
          </div>
        );
      
    }
}


export default BoardShow