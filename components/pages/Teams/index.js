import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';

import TeamItem from './TeamItem';
import DateTimeHeader from './DateTimeHeader';
import TeamDescription from './TeamDescription';
import Net from './Net';

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
                        <Net sizing={pickedTeamData.netSizing} >
                            <Col xs={4} >
                                <Row>
                                    <Col
                                        md={8} mdOffset={3}
                                        sm={11} smOffset={1}
                                        xs={11} xsOffset={1}
                                    >
                                        <h2>Zespoły</h2>
                                        <ul className='team-list'>
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
                                <Grid fluid>
                                    <Col sm={10} xs={12}>
                                        <DateTimeHeader {...pickedTeamData}/>
                                        <TeamDescription
                                            headline={pickedTeamData.description.headline}
                                            paragraph={pickedTeamData.description.paragraph}
                                        >
                                        </TeamDescription>
                                    </Col>
                                </Grid>
                            </Col>
                        </Net>
                    </Row>
                </Grid>
            </div>
        )
    }
}
