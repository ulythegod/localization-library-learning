import React from 'react';
import { i18n } from '../lib/i18n';
import keys from '../keys.json';

type CallHistoryProps = {
    history: Array<any>
}

export const CallHistory: React.FC<CallHistoryProps> = ({ history }) =>{
    const print = i18n(keys);

    return (
        <div>
            <>
                <h2>
                    {print("call-history.title", { count: history.length})}
                </h2>
                {
                    history.map(({ name, date, duration}, i) => {
                        return (<p>
                            <span>{`${name}: ${date}, ${duration}`}</span>
                        </p>);
                    })
                }
            </>
        </div>
    )
}
