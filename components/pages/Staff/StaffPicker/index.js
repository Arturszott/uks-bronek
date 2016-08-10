import React from 'react'

import { Row, Col } from 'react-bootstrap';

import './styles.scss'

export default function StaffPicker({coaches, selectedPersonIndex, onClick}) {
    return (
        <div>
            <Col xsHidden smHidden>
                <ul className="staff-picker">
                    {coaches.map((coach, i) => {
                        const nameParts = coach.name.split(' ');

                        return (
                            <li key={i} className={`coach-name ${selectedPersonIndex === i ? 'is-active' : ''}`} onClick={onClick.bind(null, i)}>
                                <span className='name'>{nameParts[0]}</span>
                                <span className='surname'>{nameParts[1]}</span>
                            </li>
                        );
                    })}
                </ul>
            </Col>
            <Col mdHidden lgHidden >
                MOBILE PICKER
            </Col>
        </div>
    )
}
