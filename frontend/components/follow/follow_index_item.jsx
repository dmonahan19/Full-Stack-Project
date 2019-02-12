import React from 'react';


class FollowIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {


        return (
            <li>{this.props.user_id}</li>
        )
           
    }

};

export default FollowIndexItem;