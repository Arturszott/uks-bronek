import React from 'react'
import MainNavigaiton from '../components/layout/MainNavigation';
import Main from '../components/layout/Main'

const Template = (props) => {
    return (
        <Main>
            <MainNavigaiton />
            {props.children}
        </Main>
    )
}

Template.propTypes = {
    children: React.PropTypes.any
}


export default Template