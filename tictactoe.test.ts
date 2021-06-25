import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
})

test('calls onClick event on click of board square', async () => {
    let button = await (await driver).findElement(By.id('click-box'));
    await button.click();
})

test('renders game status correctly', async () => {
    let button = await (await driver).findElement(By.id('click-box'));
    await button.click();
})

test('if row is filled, player should be notified they won ' async () =>{
    let button = await (await driver).findElement(By.id('click-box'));
    await button.click();
});

// okay so the issue with the tests is that im a little confused as to what im being reqauested of, Im not sure of the let var being used in all of them being i think some need a different type of statement/??

// when we have 1:1 please go over this with me because im a little confused.

// QA is great but when it comes to the testing i may be a littel weaker on this subject

