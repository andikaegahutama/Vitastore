const puppeteer = require("puppeteer");
const { dataWhatsapp, dataPin } = require("../case/data/data");

login = async () => {
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
};
module.exports = login;
