import React from 'react'

import { Row, Col } from 'react-bootstrap';

import './styles.scss'

export default function StaffPicker({coaches, selectedPersonIndex, onClick}) {
    return (
        <ul className="staff-picker">
            {coaches.map((coach, i) => {
                return (
                    <li key={i} className={`coach-name ${selectedPersonIndex === i ? 'is-active' : ''}`} onClick={onClick.bind(null, i)}>
                        {coach.name}
                    </li>
                );
            })}
        </ul>
    )
}
