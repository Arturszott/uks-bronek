import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'

import './styles.scss'

export default class TeamsPage extends React.Component {
    render () {
        return (
            <div className='home-page page'>
                <Container>
                    <h1>Teams</h1>
                </Container>
            </div>
        )
    }
}
