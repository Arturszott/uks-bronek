import React from 'react'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Scroll from 'react-scroll';

import HomePage from '../components/pages/Home';
import TeamsPage from '../components/pages/Teams';
import StaffPage from '../components/pages/Staff';
import SupportersPage from '../components/pages/Supporters';
import ContactPage from '../components/pages/Contact';

export default class Index extends React.Component {
    render () {
        const Element = Scroll.Element;

        return (
            <DocumentTitle title={config.siteTitle}>
                <div>
                    <Element name='home-page'>
                        <HomePage />
                    </Element>
                    <Element name='teams-page'>
                        <TeamsPage />
                    </Element>
                    <Element name='staff-page'>
                        <StaffPage />
                    </Element>
                    <Element name='supporters-page'>
                        <SupportersPage />
                    </Element>
                    <Element name='contact-page'>
                        <ContactPage />
                    </Element>
                </div>
            </DocumentTitle>
        )
    }
}
