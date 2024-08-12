const puppeteer = require("puppeteer");
const Chance = require("chance");
const chance = new Chance();
const {
  dataNama,
  dataWhatsapp,
  dataPin,
  dataKelurahan,
  datart,
  datarw,
  datafullAddress,
} = require("../case/data/data");
let number = [0, 1, 2, 3];
let randomNumber = Math.floor(Math.random * number.length) + 1;

register = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`],
    devtools: true,
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 700 });
  await page.goto("https://vitastore.id/auth/register?reff=Cs049");

  const name = await page.waitForSelector("#name");
  await name.click(name);
  await name.type(chance.name());

  const phone = await page.waitForSelector("#whatsapp");
  await page.click("#whatsapp");
  await phone.type("08" + chance.phone());

  const pin = await page.waitForSelector("#pin");
  await page.click("#pin");
  await pin.type("123456");

  const confirmPin = await page.waitForSelector("#confirm-pin");
  await page.click("#confirm-pin");
  await confirmPin.type("123456");

  await page.click("xpath//html/body/div/div[2]/div/div[1]/div[2]/button");
};
module.exports = register;
