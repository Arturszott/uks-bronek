import React from 'react'
import { Link } from 'react-router'
import { Grid, Col, Row, Button } from 'react-bootstrap';
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import Scroll  from 'react-scroll';

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
        };

        const { Link } = Scroll;
        const NavigationLink = function ({ children, to}) {
            return (
                <Link to={to} activeClass="active"  spy={true} smooth={true} offset={-80} duration={500} >
                    {children}
                </Link>
            )
        };

        return (
            <Headroom disableInlineStyles>
                <div className="main-navigation">
                    <Grid>
                        <Row>
                            <Col xs={3} sm={4}  className='text-center'>
                                <Row >
                                    <Col xs={6} xsHidden>
                                        <NavigationLink to="teams-page">
                                            {navigationLinks.teams}
                                        </NavigationLink>
                                    </Col>
                                    <Col xs={6} xsHidden>
                                        <NavigationLink to="staff-page">
                                            {navigationLinks.staff}
                                        </NavigationLink>
                                    </Col>
                                    <Col xs={12} mdHidden smHidden lgHidden>
                                        <Button className='menu-button'>Menu</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xs={6} sm={4} className='text-center'>
                                <NavigationLink to="home-page">
                                    <Logo/>
                                </NavigationLink>
                            </Col>
                            <Col xs={3} sm={4} className='text-center'>
                                <Row>
                                    <Col xs={6} xsHidden>
                                        <NavigationLink to="supporters-page">
                                            {navigationLinks.supporters}
                                        </NavigationLink>
                                    </Col>
                                    <Col xs={6} xsHidden>
                                        <NavigationLink to="contact-page">
                                            {navigationLinks.contact}
                                        </NavigationLink>
                                    </Col>
                                    <Col xs={12} xsVisible mdHidden smHidden lgHidden>
                                        <NavigationLink to="contact-page">
                                            <Button className='menu-button pull-right'>
                                                Kontakt
                                            </Button>
                                        </NavigationLink>
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
