import React from 'react'

import { Row, Col } from 'react-bootstrap';

import './styles.scss'

export default function StaffPicker({coaches, selectedPersonIndex}) {
    return (
        <ul className="staff-picker">
            {coaches.map((coach, i) => {
                return <li className={`coach-name ${selectedPersonIndex === i ? 'is-active' : ''}`}>{coach.name}</li>;
            })}
        </ul>
    )
}
