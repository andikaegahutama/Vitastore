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
} = require("./data/data");
const data = require("./data/data");
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let randomNumber = Math.floor(Math.random * number.length) + 1;

createAddress = async () => {
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

  const tambahKontak = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div[2]/button"
  );
  await tambahKontak.click();

  const nameAddress = await page.waitForSelector("#name");
  await nameAddress.click();
  await nameAddress.type(chance.name());

  const labelInput = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div/div[1]/div[2]/div[2]/button"
  );
  await labelInput.click();

  const inputLabel = await page.waitForSelector(
    `xpath//html/body/div/div[2]/div/div[1]/div[2]/div[2]/ul/li[1]`
  );
  await inputLabel.click();

  const desa = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div/div[1]/div[2]/div[3]/div/div/input"
  );
  await desa.click();

  const territory = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div/div[1]/div[2]/div/div/div/input"
  );
  await territory.click();
  await territory.type(dataKelurahan());

  if (
    (territory === "Gunungtelu",
    "Ciporos",
    "Bengbulang",
    "Ciruyung",
    "Surusunda",
    "Pangawaren")
  ) {
    const city = await page.waitForSelector(
      `xpath//html/body/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/button`
    );
    await city.click();
  } else {
    const city = await page.waitForSelector(
      `xpath//html/body/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/button[${randomNumber}]`
    );
    await city.click();
  }

  const next = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div/div[2]/button"
  );
  await next.click();

  const whatsapp = await page.waitForSelector("#whatsapp");
  await page.click("#whatsapp");
  await whatsapp.type("628" + chance.phone());

  const fullAddress = await page.waitForSelector("#fullAddress");
  await page.click("#fullAddress");
  await fullAddress.type(`${datafullAddress()}, ${data.dataKelurahan()}`);

  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight), 2000;
  });

  const aggrement = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div/div[1]/div[2]/div[7]/label"
  );
  await aggrement.click();

  await page.click("xpath//html/body/div/div[2]/div/div[2]/button[2]");
  await console.log("Berhasil Create Address");
};

module.exports = createAddress;
