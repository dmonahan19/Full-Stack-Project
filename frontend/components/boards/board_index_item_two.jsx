import React from 'react';

 class BoardIndexItemTwo extends React.Component {

    constructor(props){
        super(props);
        this.state = { showSave: false };
        this.state = this.props.pin;

        this.onHover = this.onHover.bind(this);
        this.offHover = this.offHover.bind(this);
    }

     onHover(e) {
         this.setState({ showSave: true });
     }

     offHover(e) {
         this.setState({ showSave: false });
     }

    render(){
    
    let photo;
    if (this.props.board.photo) {
        photo = <li>
            <img src={this.props.board.photo} />

        </li>
    }

    else {
        photo = <li className='no-photo2'>
            <div className='no-photo2'></div>

        </li>
    

        }
        return (
            <div className='whole-image-save'
                onMouseEnter={this.onHover}
                onMouseLeave={this.offHover}>
                {this.state.showSave ? (
                    <button className='button4' onClick={() => {

                        const pin = this.state;
                        pin.board_id = this.props.board.id;
                        this.props.createPin(this.state)}} >

                        <div className='whole-pin-button-2'>
                            <icon className='fas fa-thumbtack pin-index-icon'></icon>
                            <h1 className="pin-index-submit">Save</h1>
                        </div>
                    </button>) : (null)}
                <li>
                    <div className='board-index2'>
                        <ul className="left-board-index2">
                            <div className="picture-name2">
                                {photo}
                                <li>
                                    <h2 className='board-title2'>{this.props.board.title} </h2>
                                </li>
                            </div>
                        </ul>
                    </div>
                </li>

            </div>);
    }

};

export default BoardIndexItemTwo;