import React from 'react'
import DocumentTitle from 'react-document-title'
import { Grid, Row, Col } from 'react-bootstrap'

import './styles.scss'

import data from './data'

import StaffPicker from './StaffPicker';
import CoachInfo from './CoachInfo';
import CoachPhoto from './CoachPhoto';

export default class StaffPage extends React.Component {
    constructor() {
        super();

        this.state = {
            selectedPersonIndex: 0
        }
    }

    selectCoach(i) {
        this.setState({
            selectedPersonIndex: i
        })
    }

    render () {
        const { selectedPersonIndex } = this.state;
        const coachData = data[selectedPersonIndex];

        return (
            <div className='staff-page page'>
                <Grid>
                    <Row>
                        <Col sm={8}>
                            <h3 className='page-headline'>Kadra</h3>
                            <StaffPicker
                                coaches={data}
                                selectedPersonIndex={selectedPersonIndex}
                                onClick={this.selectCoach.bind(this)}
                                onChange={this.selectCoach.bind(this)}
                            />
                            <CoachInfo {...coachData}/>
                        </Col>
                        <Col sm={4}>
                            <CoachPhoto {...coachData}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
