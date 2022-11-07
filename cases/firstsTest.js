Feature('My First Test');

Scenario.only('test something', ({ I }) => {
  I.amOnPage('https://github.com')
  I.see('GitHub')
});
