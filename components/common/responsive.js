import React from 'react'
import { Col } from 'react-bootstrap';

export const DesktopOnly = function(props) {
    return (
        <Col xsHidden smHidden>
            {props.children}
        </Col>
    )
}

export const MobileOnly = function(props) {
    return (
        <Col mdHidden lgHidden >
            {props.children}
        </Col>
    )
}
