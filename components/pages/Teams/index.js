import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';

import TeamItem from '../../teams/TeamItem';
import DateTimeHeader from '../../teams/DateTimeHeader';

import './styles.scss'

const teams = [
    {
        name: 'Minisiatkówka',
        age: '6-10'
    },
    {
        name: 'Młodzicy',
        age: '11-13'
    },
    {
        name: 'Kadeci',
        age: '14-16'
    },
    {
        name: 'Juniorzy',
        age: '17-24'
    },
    {
        name: 'Seniorzy',
        age: '25-40'
    }
];

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
                                        {teams.map((teamProps, i) => {
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
                            <DateTimeHeader />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
