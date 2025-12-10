import '@/components/App/App.css';
import { AppLanguageSync } from '@/components/App/AppLanguageSync';
import { useAppTranslation } from '@/i18n';

function App() {
  const { t, i18n } = useAppTranslation();
  const locale = i18n.language;
  return (
    <>
      <AppLanguageSync />
      <h1>App</h1>
      <p>{t('common:welcome')}</p>
      <button type="button" onClick={() => i18n.changeLanguage({ en: 'uk', uk: 'en' }[locale])}>
        {locale}
      </button>
    </>
  );
}

export default App;
