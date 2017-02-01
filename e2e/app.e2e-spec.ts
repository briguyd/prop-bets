import { PropBetsPage } from './app.po';

describe('prop-bets App', function() {
  let page: PropBetsPage;

  beforeEach(() => {
    page = new PropBetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
