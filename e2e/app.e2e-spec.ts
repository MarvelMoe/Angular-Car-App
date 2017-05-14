import { FastestCarsPage } from './app.po';

describe('fastest-cars App', () => {
  let page: FastestCarsPage;

  beforeEach(() => {
    page = new FastestCarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
