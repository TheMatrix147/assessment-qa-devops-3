const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  test("clicking the Draw button displays the div with id 'choices'", async () => {
    await driver.get("http://localhost:8000");
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    
    const choicesDiv = await driver.findElement(By.id("choices"));
    const isChoicesDivDisplayed = await choicesDiv.isDisplayed();
  
    expect(isChoicesDivDisplayed).toBe(true);
  });
  test("clicking 'Add to Duo' button displays the div with id 'player-duo'", async () => {
    await driver.get("http://localhost:8000");

    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    
    const addToDuoButton = await driver.findElement(By.className("bot-btn"));
    await addToDuoButton.click();
  
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    const isPlayerDuoDivDisplayed = await playerDuoDiv.isDisplayed();
  
    expect(isPlayerDuoDivDisplayed).toBe(true);
  });
});