import React from 'react'
import { Link } from 'react-router'
import { Grid, Col, Row } from 'react-bootstrap';
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import './styles.scss'

import Logo from '../../common/Logo';
import { MobileOnly, DesktopOnly } from '../../common/responsive';

export default class MainNavigation extends React.Component {
    render () {
        const navigationLinks = {
            teams: (
                <span className="navigation-link">
                <span className="text">Zespoły</span>
            </span>
            ),
            staff: (
                <span className="navigation-link">
                <span className="text">Kadra</span>
            </span>
            ),
            supporters: (
                <span className="navigation-link">
                <span className="text">Patroni</span>
            </span>
            ),
            contact: (
                <span className="navigation-link">
                <span className="text">Kontakt</span>
            </span>
            )
        }

        return (
            <Headroom disableInlineStyles>
                <div className="main-navigation">
                    <Grid>
                        <Row>
                            <Col xs={3} sm={4}  className='text-center'>
                                <Row >
                                    <Col xs={6} xsHidden>
                                        {navigationLinks.teams}
                                    </Col>
                                    <Col xs={6} xsHidden>
                                        {navigationLinks.staff}
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} sm={4} className='text-center'>
                                <Logo/>
                            </Col>
                            <Col xs={3} sm={4} className='text-center'>
                                <Row>
                                    <Col xs={6} xsHidden>
                                        {navigationLinks.supporters}
                                    </Col>
                                    <Col xs={6} xsHidden>
                                        {navigationLinks.contact}
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
