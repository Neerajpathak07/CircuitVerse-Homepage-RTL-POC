import Banana from 'banana-i18n';

const banana = new Banana();
banana.setLocale(window.locale);
const finalFallback = 'en';

// object with default language preloaded
const userLocale = window.locale || finalFallback;

banana.setLocale(userLocale);

// eslint-disable-next-line no-console
console.log('Current Locale:', banana.getLocale());

const messages = {
    [finalFallback]: require(`./i18n/${finalFallback}.json`),
};
try {
    messages.he = require(`./i18n/he.json`);
} catch (err) {
    // If Asynchronous loading for current locale failed, load default locale
}
banana.load(messages);
window.banana = banana;

export default banana;
