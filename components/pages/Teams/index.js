import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import TeamItem from './TeamItem';
import DateTimeHeader from './DateTimeHeader';
import TeamDescription from './TeamDescription';
import Net from './Net';

import './styles.scss'

import teamsData from './data';

function renderTeamList(teamsData, showTeamInfo, pickedTeam, hideTeamList, isVisible) {
    var visibilityClass = isVisible ? 'is-visible' : '';

    return (
        <div>
            <ul className={`team-list ${visibilityClass}`}>
                {teamsData.map((teamProps, i) => {
                    return (
                        <TeamItem key={i} {...teamProps}
                                  active={pickedTeam === i}
                                  onClick={() => {
                                showTeamInfo(i);
                                hideTeamList();
                              }}
                        />
                    );
                })}
            </ul>
            <div className={`team-list-backdrop ${visibilityClass}`} onClick={hideTeamList}>
                <Glyphicon glyph="remove" className='icon-remove'/>
            </div>
        </div>
    );
}

export default class TeamsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            pickedTeam: 1,
            teamsPanelVisible: false
        }
    }

    showTeamInfo(i) {
        this.setState({ pickedTeam: i })
    }

    showTeamList() {
        this.setState({ teamsPanelVisible: true })
    }

    hideTeamList() {
        this.setState({ teamsPanelVisible: false })
    }

    render () {
        const pickedTeamData = teamsData[this.state.pickedTeam];

        return (
            <div className='teams-page page'>
                <Grid fluid>
                    <Row>
                        <Net sizing={pickedTeamData.netSizing} >
                            <Col sm={4} xs={12} >
                                <Row>
                                    <Col
                                        md={8} mdOffset={3}
                                        sm={11} smOffset={1}
                                    >
                                        <h3 className='page-headline'>
                                            Zespoły
                                            <Glyphicon glyph="menu-down" className='icon-list'
                                                       onClick={this.showTeamList.bind(this)}
                                            />

                                        </h3>

                                        {
                                            renderTeamList(
                                                teamsData,
                                                this.showTeamInfo.bind(this),
                                                this.state.pickedTeam,
                                                this.hideTeamList.bind(this),
                                                this.state.teamsPanelVisible
                                            )
                                        }



                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={8} xs={12}>
                                <Grid fluid>
                                    <Row>
                                        <Col sm={8} xs={12}>
                                            <DateTimeHeader {...pickedTeamData}/>
                                            <TeamDescription
                                                headline={pickedTeamData.description.headline}
                                                paragraph={pickedTeamData.description.paragraph}
                                                name={pickedTeamData.name}
                                            >
                                            </TeamDescription>
                                        </Col>
                                    </Row>
                                </Grid>
                            </Col>
                        </Net>
                    </Row>
                </Grid>
            </div>
        )
    }
}
