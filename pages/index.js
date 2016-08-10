import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

import HomePage from '../components/pages/Home';
import TeamsPage from '../components/pages/Teams';
import StaffPage from '../components/pages/Staff';
import SupportersPage from '../components/pages/Supporters';
import ContactPage from '../components/pages/Contact';

export default class Index extends React.Component {
    render () {
        return (
            <DocumentTitle title={config.siteTitle}>
                <div>
                    <HomePage />
                    <TeamsPage />
                    <StaffPage />
                    <SupportersPage />
                    <ContactPage />
                </div>
            </DocumentTitle>
        )
    }
}
