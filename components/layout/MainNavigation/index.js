import React from 'react'
import { Link } from 'react-router'
import { Grid, Col, Row } from 'react-bootstrap';
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import './styles.scss'

import Logo from '../../common/Logo';

export default class MainNavigation extends React.Component {
    render () {
        return (
            <Headroom disableInlineStyles>
                <div className="main-navigation">
                    <Grid>
                        <Row>
                            <Col xs={4} className='text-center'>
                                <Row>
                                    <Col xs={6} >
                                        <span className="navigation-link">
                                            <span className="text">Zespoły</span>
                                        </span>
                                    </Col>
                                    <Col xs={6} >
                                        <span className="navigation-link">
                                            <span className="text">Kadra</span>
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={4} className='text-center'>
                                <Logo/>
                            </Col>
                            <Col xs={4} className='text-center'>
                                <Row>
                                    <Col xs={6} >
                                        <span className="navigation-link">
                                            <span className="text">Patroni</span>
                                        </span>
                                    </Col>
                                    <Col xs={6} >
                                        <span className="navigation-link">
                                            <span className="text">Kontakt</span>
                                        </span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </Headroom>
        )
    }
}
