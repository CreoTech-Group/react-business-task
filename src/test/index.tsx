import { IntlProvider } from 'react-intl';
import { BrowserRouter } from "react-router-dom";
import { render } from '@testing-library/react';
import { Translations } from 'localization';

const locale = 'en';

export const testRender = (component: any) => {
  return render(
    <IntlProvider locale={locale} messages={Translations[locale]}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </IntlProvider>
  );
};