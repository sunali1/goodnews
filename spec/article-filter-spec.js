// 'use strict';

describe('ArticleFilter', function() {

  var articleFilter;
  var unfilteredData;

  beforeEach(function() {
    unfilteredData = [
    {author: "Shara Tibken", title: "iPhone X preorders were snapped up in a flash", description: "You had to be fast to order Apple's newest device …ch date. It's not available again until December.", url: "https://www.cnet.com/news/apple-iphone-x-preorders-start-november-3/", urlToImage: "https://cnet3.cbsistatic.com/img/0BmSGF0EqdF5ltV_S-86f0-bc6ae54ac2a3/apple-091217-iphone-x-4117.jpg"},
    {author: "ABC News", title: "Trump’s proposal for a ‘solar’ border wall now appears dead", description: "Construction on eight border wall prototypes wrap up this week. There is not a solar wall in sight.", url: "https://www.washingtonpost.com/news/wonk/wp/2017/1…roposal-for-a-solar-border-wall-now-appears-dead/", urlToImage: "https://img.washingtonpost.com/rf/image_1484w/2010National-Politics/Images/AFP_TC36O.jpg?t=20170517"},
    {author: "ABC News", title: "From shark attacks to major storms, two mariners share their five months lost at sea", description: "Two women mariners adrift in the Pacific Ocean for…rd the USS Ashland, Jennifer Appel and Natasha...", url: "http://abcnews.go.com/US/shark-attacks-major-storms-mariners-share-months-lost/story?id=50752640", urlToImage: "http://a.abcnews.com/images/International/navy-rescue-01-ht-jef-171026_16x9_992.jpg"}
    ];
    articleFilter = new ArticleFilter(unfilteredData);
  });


  it('only returns articles that do not contain words from words array in headline', function() {
    articleFilter.filterByTitle();
    expect(articleFilter.filteredData).toEqual([{author: "Shara Tibken", title: "iPhone X preorders were snapped up in a flash", description: "You had to be fast to order Apple's newest device …ch date. It's not available again until December.", url: "https://www.cnet.com/news/apple-iphone-x-preorders-start-november-3/", urlToImage: "https://cnet3.cbsistatic.com/img/0BmSGF0EqdF5ltV_S-86f0-bc6ae54ac2a3/apple-091217-iphone-x-4117.jpg"}]);
  });

});
