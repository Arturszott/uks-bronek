import React from 'react'

import { Row, Col } from 'react-bootstrap';

import './styles.scss'

export default function TeamItem({name, active, age, onClick}) {
    const activeClass = active ? 'is-active' : '';

    return (
        <li className={`team-item ${activeClass}`} onClick={onClick}>
            <span className="content">
                <span className='name'>{name}</span>
                <span className='age'>{age} lat</span>
            </span>
        </li>
    )
}
