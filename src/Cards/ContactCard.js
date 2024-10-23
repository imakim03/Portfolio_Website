import { useTranslation } from 'react-i18next';

function ContactCard() {
    const { t } = useTranslation();
    return(
        <div
            className='card2 ContactCard'>
            {t('homePage.FindMeOn')}
        </div>
    );
}

export default ContactCard;