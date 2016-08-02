import React from 'react'

import './styles.scss'
import logoUrl from './logo.png';

export default function Logo() {
    return (
        <img src={logoUrl} className='logo' alt="UKS Bronek logo"/>
    )
}
