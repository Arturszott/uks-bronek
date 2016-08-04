import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap';

import './styles.scss'

export default function Net(props) {
    return (
        <div className='team-net'>
            {props.children}
            <Grid fluid>
                <Col xs={8} xsOffset={4}>
                    <div className='bottom-line' ></div>
                </Col>
            </Grid>
        </div>
    )
}
