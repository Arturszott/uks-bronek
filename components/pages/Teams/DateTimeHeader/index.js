import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap';

import './styles.scss'

export default function DateTimeHeader({days, hours}) {
    return (
        <header className='date-time-header'>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={7} className='days-line'>
                        <span className="days">{days}</span>
                    </Col>
                    <Col xs={12} sm={5} className='hours-field'>
                        <span className="time">{hours}</span>
                    </Col>
                </Row>
            </Grid>
        </header>
    )
}
