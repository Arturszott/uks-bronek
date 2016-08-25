import React from 'react'
import { Link } from 'react-router'
import { Grid, Col, Row, Button, Glyphicon } from 'react-bootstrap';
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import Scroll  from 'react-scroll';

import './styles.scss'

import Logo from '../../common/Logo';
import { MobileOnly, DesktopOnly } from '../../common/responsive';

export default class MainNavigation extends React.Component {
    constructor() {
        super();

        this.state = {
            menuPanelVisible: false
        }
    }

    showMenu() {
        this.setState({ menuPanelVisible: true })
    }

    hideMenu() {
        this.setState({ menuPanelVisible: false })
    }

    render () {
        const navigationLinks = {
            teams: (
                <span className="navigation-link" onClick={this.hideMenu.bind(this)}>
                    <span className="text">Zespoły</span>
                </span>
            ),
            staff: (
                <span className="navigation-link" onClick={this.hideMenu.bind(this)}>
                    <span className="text">Kadra</span>
                </span>
            ),
            supporters: (
                <span className="navigation-link" onClick={this.hideMenu.bind(this)}>
                    <span className="text">Patroni</span>
                </span>
            ),
            contact: (
                <span className="navigation-link" onClick={this.hideMenu.bind(this)}>
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

        const visibilityClass = this.state.menuPanelVisible ? 'is-expanded' : '';

        return (
            <div>
                <div className= {`mobile-navigation ${visibilityClass}`}>
                    <div className="front">
                        <div className="list-item">
                            <NavigationLink to="teams-page">
                                {navigationLinks.teams}
                            </NavigationLink>
                        </div>
                        <div className="list-item">
                            <NavigationLink to="staff-page">
                                {navigationLinks.staff}
                            </NavigationLink>
                        </div>
                        <div className="list-item">
                            <NavigationLink to="supporters-page">
                                {navigationLinks.supporters}
                            </NavigationLink>
                        </div>
                        <div className="list-item">
                            <NavigationLink to="contact-page">
                                {navigationLinks.contact}
                            </NavigationLink>
                        </div>
                    </div>

                </div>
                <div className={`mobile-navigation-backdrop ${visibilityClass}`} onClick={this.hideMenu.bind(this)}>
                    <Glyphicon glyph="remove" className='icon-remove'/>
                </div>
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
                                            <Button className='menu-button' onClick={this.showMenu.bind(this)}>Menu</Button>
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
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </Headroom>
            </div>
        )
    }
}
