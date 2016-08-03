import React from 'react'

import './styles.scss'

export default class Main extends React.Component {
    render () {
        return (
            <div className='main-wrapper'>
                {this.props.children}
            </div>
        )
    }
}
