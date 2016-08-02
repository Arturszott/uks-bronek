import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import backgroundUrl from '../assets/bg1.png';

import './home.scss'

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        <div className='home-page'>
          <h1>
            Hi people
          </h1>
          <img src={backgroundUrl} alt=""/>
          <p>Welcome to your new Gatsby site</p>
          <h2>Below are some pages showing different capabilities built-in to Gatsby</h2>
          <h3>Supported file types</h3>
          <ul>
            <li>
              <Link to={prefixLink('/react/')}>JSX (React components)</Link>
            </li>
          </ul>
          <h3>Supported CSS processors</h3>
        </div>
      </DocumentTitle>
    )
  }
}
