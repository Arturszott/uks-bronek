import React from 'react'

import './styles.scss'

export default function TeamDescription({ headline, paragraph }) {
    return (
        <article className='team-description'>
            <h3 className='headline'>
                {headline}
            </h3>
            <p className='paragraph'>
                {paragraph}
            </p>
        </article>
    )
}
