import React from 'react';


class FollowIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {


        return (
            <li>{this.props.users.email}</li>
        )
           
    }

};

export default FollowIndexItem;