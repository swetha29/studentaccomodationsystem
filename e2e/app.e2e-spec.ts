import { SrhasPage } from './app.po';

describe('srhas App', () => {
  let page: SrhasPage;

  beforeEach(() => {
    page = new SrhasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
