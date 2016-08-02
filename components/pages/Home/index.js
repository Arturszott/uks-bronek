import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { Container } from 'react-responsive-grid'

import FullScreenBackground from '../../layout/FullScreenBackground';

import backgroundUrl from './bg1.png';
import './styles.scss'

export default class HomePage extends React.Component {
    render () {
        return (
            <div className='home-page'>
                <FullScreenBackground url={backgroundUrl}/>
                <Container>
                    <h1>
                        Hi people
                    </h1>
                    <p>Welcome to your new Gatsby site</p>
                    <h2>Below are some pages showing different capabilities built-in to Gatsby</h2>
                    <h3>Supported file types</h3>
                    <ul>
                        <li>
                            <Link to={prefixLink('/react/')}>JSX (React components)</Link>
                        </li>
                    </ul>
                    <h3>Supported CSS processors</h3>
                </Container>
            </div>
        )
    }
}
