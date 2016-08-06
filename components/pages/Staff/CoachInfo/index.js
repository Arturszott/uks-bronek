import React from 'react'

import { Row, Col, Grid } from 'react-bootstrap';

import './styles.scss'

export default function CoachInfo({ name, description }) {
    return (
        <div className="coach-info">
            <div className="coach-name">
                {name}
            </div>
            <Grid fluid>
                <Row>
                    <Col sm={8}>
                        <article className="coach-description">
                            {description}
                        </article>
                    </Col>
                    <Col sm={4}>

                    </Col>
                </Row>
            </Grid>
        </div>
    )
}
