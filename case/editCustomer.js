const puppeteer = require("puppeteer");
const Chance = require("chance");
const chance = new Chance();

editCustomer = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: [`--window-size=1920,1080`],
    });
    const page = await browser.newPage();

    try {
      await page.setViewport({ width: 1475, height: 825 });
      await page.goto("https://dev.kulakin.id");
      console.log("Berhasil mengakses kulakin");
    } catch (error) {
      console.log("Gagal mengakses kulakin", error);
    }

    try {
      await page.click("xpath//html/body/div/div[2]/div[1]/div[1]/a/div");

      const whatsappfield = await page.waitForSelector("#whatsapp");
      await page.click("#whatsapp");
      await whatsappfield.type("6283844411614");

      const pin = await page.waitForSelector("#pin");
      await page.click("#pin");
      await pin.type("123456");

      await page.click("xpath//html/body/div/div[2]/div[2]/button");
      console.log("Berhasil login");
    } catch (error) {
      console.log("Gagal login", error);
    }

    try {
      const menuCustomer = await page.waitForSelector(
        "xpath//html/body/div/div[9]/a[4]/div"
      );
      await menuCustomer.click("xpath//html/body/div/div[9]/a[4]/div");

      setTimeout(async () => {
        const detailKontak = await page.waitForSelector(
          "xpath//html/body/div/div[2]/div[1]/div[2]/div/div[1]/div/div[1]"
        );
        await detailKontak.click(
          "xpath//html/body/div/div[2]/div[1]/div[2]/div/div[1]/div/div[1]"
        );
      }, 500);

      setTimeout(async () => {
        const editKontak = await page.waitForSelector(
          "xpath//html/body/div/div[2]/div[2]/div[1]/div[1]/div/div"
        );
        await editKontak.click(
          "xpath//html/body/div/div[2]/div[2]/div[1]/div[1]/div/div"
        );
      }, 1000);

      setTimeout(async () => {
        const nameCS = await page.waitForSelector("#name");
        await nameCS.click(nameCS);
        await nameCS.click({ clickCount: 3 });
        await nameCS.press("Backspace");
      }, 1200);

      setTimeout(async () => {
        const nameCS = await page.waitForSelector("#name");
        await nameCS.click(nameCS);
        await nameCS.type(chance.name());
      }, 1400);

      setTimeout(async () => {
        const birthdayInput = await page.waitForSelector("#birthday");
        await birthdayInput.click();
        await birthdayInput.type("02-02-2022"); 
        console.log(birthdayInput);
    }, 2600);
    

      setTimeout(async () => {
        const genderlist = await page.waitForSelector("#react-select-2-input");
        await genderlist.click(genderlist);
        const gender = await page.waitForSelector("#react-select-2-option-0");
        await gender.click(gender);
      }, 2000);

      setTimeout(async () => {
        const desa = await page.waitForSelector(
          "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[1]/div[2]/div[4]/div/div"
        );
        await desa.click();
        await desa.click();
      }, 2500);

      setTimeout(async () => {
        const territory = await page.waitForSelector(
          "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[1]/div[2]/div/div/div/input"
        );
        await territory.click(territory);
        await territory.type("karangpucung");
      }, 3000);

      setTimeout(async () => {
        const city = await page.waitForSelector(
          "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[1]/div[2]/div[2]/div[1]/div"
        );
        await city.click(city);
      }, 3500);

      setTimeout(async () => {
        await page.click(
          "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[2]/button/div"
        );
      }, 5000);

      setTimeout(async () => {
        await page.click(
          "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[2]/button/div"
        );
      }, 5500);

      setTimeout(async () => {
        const rt = await page.waitForSelector("#rt");
        await rt.click(rt);
        await rt.type("2");
      }, 6000);

      setTimeout(async () => {
        const rw = await page.waitForSelector("#rw");
        await rw.click(rw);
        await rw.type("1");
      }, 6500);

      setTimeout(async () => {
        const whatsapp = await page.waitForSelector("#whatsapp");
        await whatsapp.click({ clickCount: 3 });
        await whatsapp.press("Backspace");
      }, 7000);

      setTimeout(async () => {
        const whatsapp = await page.waitForSelector("#whatsapp");
        await page.click("#whatsapp");
        await whatsapp.type("628" + chance.phone());
      }, 7500);

      setTimeout(async () => {
        const fullAddress = await page.waitForSelector("#fullAddress");
        await fullAddress.click({ clickCount: 3 });
        await fullAddress.press("Backspace");
      }, 8000);

      setTimeout(async () => {
        const fullAddress = await page.waitForSelector("#fullAddress");
        await page.click("#fullAddress");
        await fullAddress.type(chance.address());
      }, 9000);

      setTimeout(async () => {
        const submit = await page.waitForSelector(
          "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[2]/button/div"
        );
        await submit.click(submit);
      }, 9500);
      console.log("Berhasil membuat customer");
    } catch (error) {
      console.log("Gagal menambahkan customer", error);
    }
    console.log("Selamat anda berhasil mengeksekusi semua code");
  } catch (error) {
    console.log("Maaf anda gagal mengeksekusi semua code", error);
  }
};
module.exports = editCustomer;
