export const formatDate = (date, locale = 'tr') => {
    const d = new Date(date);

    const enDateOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const enTimeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // AM/PM OLMASIN
    };

    const trOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    if (locale === 'tr') {
        return new Intl.DateTimeFormat('tr-TR', trOptions).format(d);
    }

    if (locale === 'en') {
        const datePart = new Intl.DateTimeFormat('en-US', enDateOptions).format(d);
        const timePart = new Intl.DateTimeFormat('en-US', enTimeOptions).format(d);

        return `${datePart} at ${timePart}`;
    }


    return new Intl.DateTimeFormat('tr-TR', trOptions).format(d);
};