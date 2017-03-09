import { OjPage } from './app.po';

describe('oj App', () => {
  let page: OjPage;

  beforeEach(() => {
    page = new OjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
