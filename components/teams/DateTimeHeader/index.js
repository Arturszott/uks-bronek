import React from 'react'

import { Row, Col } from 'react-bootstrap';

import './styles.scss'

export default function DateTimeHeader({days, name, time}) {
    return (
        <header className='date-time-header'>
            <Row>
                <Col xs={8}>
                    <span className="days">{days}</span>
                </Col>
                <Col xs={4}>
                    <span className="time">{time}</span>
                </Col>
            </Row>
            <Row>
                <span className="teamName">{name}</span>
            </Row>

        </header>
    )
}
