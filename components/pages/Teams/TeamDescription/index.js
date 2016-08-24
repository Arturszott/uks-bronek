import React from 'react'

import './styles.scss'

export default function TeamDescription({ headline, paragraph, name }) {
    return (
        <article className='team-description'>
            <span className="name">{name}</span>
            <h3 className='headline'>
                {headline}
            </h3>
            <p className='paragraph'>
                {paragraph}
            </p>
        </article>
    )
}
