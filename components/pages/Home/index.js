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
                    <div className="dialog">
                        <span className="dialog-line">Co jest najważniejsze w zagrywce? Wyskok, uderzenie?</span>
                        <span className="dialog-line">Przebić piłkę na drugą stronę</span>
                    </div>
                </Container>
            </div>
        )
    }
}
