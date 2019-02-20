import React from 'react';



class PinBoardViewThree extends React.Component {

    constructor(props) {
        super(props);


    }


    render() {
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        this.props.pins.forEach((pin, i) => {

            if (i === 0) {
                col1.push(<img key={i} src={pin.photo}></img>);
            }
            if (i === 1) {
                col2.push(<img key={i} src={pin.photo}></img>);
            }
            if (i === 2) {
                col3.push(<img key={i} src={pin.photo}></img>);
            }
            if (i === 3) {
                col4.push(<img key={i} src={pin.photo}></img>);
            }

        });

        if (col1.length === 0) {
            col1.push(<img src={window.square} key={1} />)
        }
        if (col2.length === 0) {
            col2.push(<img src={window.square} key={2} />)
        }
        if (col3.length === 0) {
            col3.push(<img src={window.square} key={3} />)
        }
        if (col4.length === 0) {
            col4.push(<img src={window.square} key={4} />)
        }
        return (
            <>
                <div className="gallery2">
                    <div className="gallery-2-item-1">
                        {col1}
                    </div>
                    <div className="gallery-2-item-2">
                        {col2}
                    </div>
                    <div className="gallery-2-item-3">
                        {col3}
                    </div>
                    <div className="gallery-2-item-4">
                        {col4}
                    </div>
                </div>
            </>
        )
    }
}

export default PinBoardViewThree;