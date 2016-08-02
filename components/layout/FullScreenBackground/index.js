import React from 'react'

import './styles.scss'

export default function FullScreenBackground({ url }) {
    return (
        <div className='full-screen-bg' style={{ backgroundImage: `url(${url})`}} />
    )
}
