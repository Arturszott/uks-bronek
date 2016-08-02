import React from 'react'
import { Link } from 'react-router'
import { Grid, Col } from 'react-bootstrap';
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
                        <Col md={4} > </Col>
                        <Col md={4} className='text-center'>
                            <Link to={prefixLink('/')}>
                                <Logo/>
                            </Link>
                        </Col>
                        <Col md={4} />

                    </Grid>
                </div>
            </Headroom>
        )
    }
}
