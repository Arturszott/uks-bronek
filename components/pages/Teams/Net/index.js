import React from 'react'
import { Grid, Col, Row } from 'react-bootstrap';

import './styles.scss'

export default function Net({children, sizing}) {
    return (
        <div className='team-net'>
            {props.children}
            <Grid fluid>
                <div className={`net-pattern ${sizing.className}`}></div>
                <div className='net-pole'></div>
                <span className="net-height-text">Wysokość siatki: {sizing.unit}</span>

                <Col xs={8} xsOffset={4}>
                    <div className='bottom-line' ></div>
                </Col>
            </Grid>
        </div>
    )
}
