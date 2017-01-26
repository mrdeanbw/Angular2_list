import { FirstCliPage } from './app.po';

describe('first-cli App', function() {
  let page: FirstCliPage;

  beforeEach(() => {
    page = new FirstCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
