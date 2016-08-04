import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';

import TeamItem from '../../teams/TeamItem';
import DateTimeHeader from '../../teams/DateTimeHeader';

import './styles.scss'

import teamsData from './data';

export default class TeamsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            pickedTeam: 1
        }
    }

    showTeamInfo(i) {
        this.setState({ pickedTeam: i })
    }

    render () {
        const pickedTeamData = teamsData[this.state.pickedTeam];

        return (
            <div className='teams-page page'>
                <Grid fluid>
                    <Row>
                        <Col xs={4} >
                            <Row>
                                <Col
                                    md={8} mdOffset={3}
                                    sm={11} smOffset={1}
                                    xs={11} xsOffset={1}
                                >
                                    <h2>Zespoły</h2>
                                    <ul>
                                        {teamsData.map((teamProps, i) => {
                                            return (
                                                <TeamItem key={i} {...teamProps}
                                                          active={this.state.pickedTeam === i}
                                                          onClick={this.showTeamInfo.bind(this, i)}
                                                />
                                            );
                                        })}
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={8} >
                            <DateTimeHeader {...pickedTeamData}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
