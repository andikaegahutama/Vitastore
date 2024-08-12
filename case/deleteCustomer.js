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

deleteCustomer = async () => {
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
};

module.exports = deleteCustomer;
