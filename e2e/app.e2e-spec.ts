import { ARoutePage } from './app.po';

describe('a-route App', () => {
  let page: ARoutePage;

  beforeEach(() => {
    page = new ARoutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
