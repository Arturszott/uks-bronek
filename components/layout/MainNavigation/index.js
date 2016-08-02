import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'

import './styles.scss'

import Logo from '../../common/Logo';

export default class MainNavigation extends React.Component {
    render () {
        return (
            <Headroom disableInlineStyles>
                <div className="main-navigation">
                    <Container>
                        <Link to={prefixLink('/')}>
                            <Logo/>
                        </Link>
                    </Container>
                </div>
            </Headroom>
        )
    }
}
