import { FaqAppPage } from './app.po';

describe('faq-app App', () => {
  let page: FaqAppPage;

  beforeEach(() => {
    page = new FaqAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
