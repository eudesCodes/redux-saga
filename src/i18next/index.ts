import i18next from 'i18next';
// import * as resource from '_locale.json';
import { initReactI18next } from 'react-i18next';

export const initTranslations = (Lng: string): any => {
    return i18next.use(initReactI18next).init({
        debug: false,
        defaultNS: 'translations',

        fallbackLng: Lng,
        interpolation: {
            escapeValue: false, //  not needed for react!!
            formatSeparator: ',',
        },
        keySeparator: false, //  we use content as keys
        //  have a common namespace used around the full app
        ns: ['translations'],
        react: {
            wait: true,
        },
        //  we init with resources
        resources: {
            fr: {
                translations: {
                    'send.request': 'Test Redux-Saga!!',
                },
            },
        },
    });
};
