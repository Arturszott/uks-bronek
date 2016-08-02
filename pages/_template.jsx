import React from 'react'
import MainNavigaiton from '../components/layout/MainNavigation';

const Template = (props) => {
    return (
        <div>
            <MainNavigaiton />
            {props.children}
        </div>
    )
}

Template.propTypes = {
    children: React.PropTypes.any
}


export default Template