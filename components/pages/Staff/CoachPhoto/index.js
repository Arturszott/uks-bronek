import React from 'react'

import { Row, Col, Grid } from 'react-bootstrap';

import './styles.scss'

export default function CoachPhoto({ name, imageUrl }) {
    return (
        <div className="coach-photo">
            <div className="photo-wrapper">
                <img src={imageUrl} alt={name}/>
            </div>
        </div>
    )
}
