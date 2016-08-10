import React from 'react'

import { Row, Col } from 'react-bootstrap';
import Select from 'react-select';

import './styles.scss'
import 'react-select/dist/react-select.css';

import { MobileOnly, DesktopOnly } from '../../../common/responsive';

export default function StaffPicker({coaches, selectedPersonIndex, onClick, onChange}) {
    const selectOptions = coaches.map(({name}, i) => ({ value: i, label: name }));

    return (
        <div>
            <DesktopOnly>
                <ul className="staff-picker">
                    {coaches.map((coach, i) => {
                        const nameParts = coach.name.split(' ');

                        return (
                            <li key={i} className={`coach-name ${selectedPersonIndex === i ? 'is-active' : ''}`} onClick={onClick.bind(null, i)}>
                                <span className='name'>{nameParts[0]}</span>
                                <span className='surname'>{nameParts[1]}</span>
                            </li>
                        );
                    })}
                </ul>
            </DesktopOnly>
            <MobileOnly>
                <Select
                    searchable={false}
                    clearable={false}
                    value={selectedPersonIndex}
                    options={selectOptions}
                    onChange={(option) => {onChange(option.value)}}
                />
            </MobileOnly>
        </div>
    )
}
