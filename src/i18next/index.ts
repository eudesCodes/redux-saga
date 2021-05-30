import i18next from 'i18next';
import { fr } from '_locale.json';

i18next.init({
    interpolation: {
        // React already does escaping
        escapeValue: false,
    },
    lng: 'fr',
    resources: {
        fr: {
            translation: fr,
        },
    },
});

export default i18next;
