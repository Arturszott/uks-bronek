import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';

import './styles.scss'

export default class TeamsPage extends React.Component {
    render () {
        return (
            <div className='teams-page page'>
                <Grid>
                    <Row>
                        <Col xs={4} >
                            <h2>Zespoły</h2>
                            <ul>

                            </ul>
                        </Col>
                        <Col xs={8} >
                            <h2>Zespoły</h2>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
