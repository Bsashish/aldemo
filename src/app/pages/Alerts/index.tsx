import { useState } from 'react'
import { Toggle } from 'app/components/common/Toggle'
import { Title } from '../../components/common/Title'

export const Alerts = () => {
    const [current, setCurrent] = useState('Pre Market')

    return (
        <div className="mx-4">
            <Title title="Alerts" />
            <Toggle items={['Pre Market', 'Intraday', 'Post Market']} current={current} setCurrent={setCurrent} />
        </div>
    )
}