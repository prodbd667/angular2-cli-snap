import { AngSnapSvgPage } from './app.po';

describe('ang-snap-svg App', () => {
  let page: AngSnapSvgPage;

  beforeEach(() => {
    page = new AngSnapSvgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
