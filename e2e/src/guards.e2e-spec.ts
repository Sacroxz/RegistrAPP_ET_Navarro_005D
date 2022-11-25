import { browser, element, by } from 'protractor';

describe('User not logged in', () => {
  const urls = ['inicio', 'scanner', 'perfil', 'feriados', 'qr-create', 'qr-created'];
  urls.map(url => (
    it(`should redirect to home page when trying to access ${url}`, async () => {
      await browser.get(url);
      expect(await browser.getCurrentUrl()).toContain('/home');
    })
  ));
});
