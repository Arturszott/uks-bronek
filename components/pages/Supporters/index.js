import React from 'react'
import DocumentTitle from 'react-document-title'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';

import './styles.scss'

import supportersData from './data';

export default class SupportersPage extends React.Component {
    render () {
        return (
            <div className='supporters-page page'>
                <Grid >
                    <h3 className='page-headline'>Patroni</h3>
                    <Row>
                        <Col sm={8} >
                            <section className="main-description">
                                <p>
                                    Zastawnawiasz się jak możesz wesprzeć zespół? <br/>
                                    <strong>Przyjdź na mecz.</strong>
                                </p>
                                <p>
                                    Czy wspierasz finansowo czy też tworzysz atmosferę na trybunach. <br/>
                                    <strong>Wszystko ma znaczenie.</strong>
                                </p>
                                <p>
                                    Dzięki materialnym wsparciu zawodnicy mają szansę <br/>
                                    <strong>ubiegać się o tytuł mistrza.</strong>
                                </p>
                                <p>
                                    Dzięki gorącym okrzykom zawodnicy są bardziej zmotywowani by <br/>
                                    <strong>przyłożyć przeciwnikowi na boisku.</strong>
                                </p>
                            </section>
                        </Col>
                    </Row>
                    <Row>
                        <div className="companies">
                            <h4 className='thanks'>Zawodników na boisku wspierają:</h4>
                            {supportersData.companies.map(({ name, imageUrl }, i) => {
                                return (
                                    <div className='company' key={i}>
                                        <img src={imageUrl} alt={name} title={'Sponsor: ' + name}/>
                                    </div>
                                )
                            })}
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
}
