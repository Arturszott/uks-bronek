import React from 'react'

import './styles.scss'

export default class Dialog extends React.Component {
    render () {
        return (
            <div className='dialog'>
                <div className="dialog-part">
                    <span className="dialog-line-wrapper">
                        <span className="dialog-line">
                            Co jest <strong>najważniejsze</strong> w zagrywce,
                        </span>
                    </span>
                    <span className="dialog-line-wrapper">
                        <span className="dialog-line">
                            wyskok czy uderzenie?
                        </span>
                    </span>
                </div>
                <div className="dialog-part">
                    <span className="dialog-line-wrapper">
                        <span className="dialog-line">Przebić piłkę na drugą stronę</span>
                    </span>
                </div>
            </div>
        )
    }
}
