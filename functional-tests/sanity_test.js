Feature('Sanity', { retries: 3 });
const bpLoaded = '.bp-loaded';

Before((I) => {
    I.amOnPage('/functional-tests/index.html');
});

Scenario('Sanity test @ci @chrome @firefox @edge @safari @ie @android @ios', (I) => {
    I.waitForElement(bpLoaded);
    I.waitForVisible(bpLoaded);
    I.waitForText('The Content Platform for Your Apps');
});
