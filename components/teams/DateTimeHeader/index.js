import React from 'react'

import { Grid, Row, Col } from 'react-bootstrap';

import './styles.scss'

export default function DateTimeHeader({days, name, hours}) {
    return (
        <header className='date-time-header'>
            <Grid fluid>
                <Col sm={10} xs={12}>
                    <Grid fluid>
                        <Row>
                            <Col xs={8} className='days-line'>
                                <span className="days">{days}</span>
                            </Col>
                            <Col xs={4}className='hours-field'>
                                <span className="time">{hours}</span>
                            </Col>
                        </Row>
                        <Row>
                            <span className="teamName">{name}</span>
                        </Row>
                    </Grid>
                </Col>
            </Grid>
        </header>
    )
}
