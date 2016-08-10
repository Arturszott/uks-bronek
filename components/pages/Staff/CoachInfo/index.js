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
                    <Col lg={8} sm={12}>
                        <article className="coach-description">
                            {description}
                        </article>
                    </Col>
                    <Col lg={8} sm={12}>

                    </Col>
                </Row>
            </Grid>
        </div>
    )
}
