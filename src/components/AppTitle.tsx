import React from 'react';
import { i18n } from '../lib/i18n';
import keys from '../keys.json';

const AppTitle: React.FC = () => {
    const print = i18n(keys);  

    return (<h1>{print("app.title")}</h1>);
}

export default AppTitle;