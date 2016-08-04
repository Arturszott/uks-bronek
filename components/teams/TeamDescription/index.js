import React from 'react'

import './styles.scss'

export default function TeamDescription({ headline, paragraph }) {
    return (
        <article className='team-description'>
            <h1>
                {headline}
            </h1>
            <p>
                {paragraph}
            </p>
        </article>
    )
}
