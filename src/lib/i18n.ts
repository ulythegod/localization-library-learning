let _lang: any = "ru";

function setLang(lang: string) {
    _lang = lang;
}

function i18n(keys: any) {    
    const keySet = keys[_lang]; 

    return (key: any, params?: any) => {
        const value = keySet[key];

        if (typeof value === "string") {
           return generateText(value, params);
        }

        console.log("??", forms[_lang]);
        
        const form = value[forms[_lang](params?.count)];
        return generateText(form, params);
    };
}

function generateText(keySetVal: string, params: any) {
    const res = keySetVal.includes('count') 
        ?  `${params.count} ${keySetVal.replace('{count}', '')}`
        : keySetVal;
    
    return res;
}

const forms: any = {
    "ru": pForm,
    "en": (count: number) => {
        return count === 1 ? "one" : "other"
    },
}

function pForm(count: number) {
    const lastNumber = count % 10;
    const lastNumbers = count % 100;

    if (lastNumber === 1 && lastNumbers !== 11) {
        return "one";
    }

    if (
        lastNumber > 1 &&
        lastNumbers < 5 &&
        (lastNumbers < 10 || lastNumbers > 20)
    ) {
        return "few";
    }

    return "many";
}

export { setLang, i18n }