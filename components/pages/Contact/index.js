import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';

import './styles.scss'
import schoolImageUrl from './school.png';

import contactData from './data';

export default class ContactPage extends React.Component {
    render () {
        return (
            <div className='contact-page page'>
                <Grid >
                    <Row>
                        <Col sm={6} class>
                            <h1 className='main-headline'>
                                Gdzie trenujemy
                            </h1>
                            <p className='main-description'>
                                Hala treningowa znajduje się zaraz za budykiem II Liceum Ogólnokształcącego im.&nbsp;Władysława
                                Broniewskiego w Koszalinie. Wjazd przez bramę.

                                <br/>
                                <span className="comment">
                                    (Tak, patron szkoły był niewątpliwą inspiracją nazwy klubu.)
                                </span>
                            </p>
                        </Col>
                        <Col sm={6}>
                            <a href="https://goo.gl/maps/Lejg5WFQwNC2" className="map-link" target='_blank'>
                                Pokaż miejsce na mapie
                            </a>
                        </Col>
                    </Row>
                </Grid>
                <div className="text-center">
                    <img src={schoolImageUrl}
                         alt="II Liceum Ogólnokształcącego im. Władysława Broniewskiego w Koszalinie"
                         className='school-image'
                    />
                </div>
            </div>
        )
    }
}
