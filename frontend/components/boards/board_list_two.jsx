import React from 'react';


class BoardListTwo extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        const boards = this.props.boards.map((board, i) => {
            return (
                <li>{board.title}</li>
            );
        });

        return (
            <div >
                <ul className=''>
                    {boards}
                </ul>
            </div>
        );
    }
  

}



export default BoardListTwo;
