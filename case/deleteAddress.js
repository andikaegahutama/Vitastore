const puppeteer = require("puppeteer");
const Chance = require("chance");
const chance = new Chance();
const { dataWhatsapp, dataPin } = require("./data/data");
const data = require("./data/data");
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let randomNumber = Math.floor(Math.random * number.length) + 1;

deleteAddress = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`],
    devtools: true,
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 700 });
  await page.goto("https://uat.vitastore.id/auth/login");

  const whatsappfield = await page.waitForSelector("#whatsapp");
  await page.click("#whatsapp");
  await whatsappfield.type(dataWhatsapp());

  const pin = await page.waitForSelector("#pin");
  await page.click("#pin");
  await pin.type(dataPin());

  await page.click(
    "xpath//html/body/div/div[2]/div/div[1]/div[2]/div[4]/button"
  );
  await console.log("Berhasil login createAddress");

  const menuProfile = await page.waitForSelector(
    "xpath//html/body/div/div[3]/a[5]"
  );
  await menuProfile.click();

  const menuCustomer = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div[2]/div[3]/div[2]/a[1]"
  );
  await menuCustomer.click();

  const ubahCustomer = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div[1]/div[2]/div[1]/div/button"
  );
  await ubahCustomer.click();

  const deleteButton = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div/div[2]/button[1]"
  );
  await deleteButton.click();

  const deleteSure = await page.waitForSelector(
    "xpath//html/body/div[2]/div/div/div/div[2]/div/div/div[3]/button[2]"
  );
  await deleteSure.click();
};

module.exports = deleteAddress;
