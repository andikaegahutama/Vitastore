const doLogin = require("../Vitastore/case/login");
const doRegist = require("../Vitastore/case/register");
const doCreateAddress = require("./case/createAddress");
// const doEditAddress = require("../Vitastore/case/editAddress");
// const doDeleteAddress = require("../Vitastore/case/deleteAddress");
const doAddCart = require("../Vitastore/case/addCart");
const doAddOneEDX = require("../Vitastore/case/addOneEDX");
const doAddMuchEDX = require("../Vitastore/case/addMuchEDX");
const doAddOneEDM = require("../Vitastore/case/addOneEDM");
const doAddMuchEDM = require("../Vitastore/case/addOneEDM");
const doAddDifferentEDM = require("../Vitastore/case/addDifferentEDM");
const doAddDifferentEDX = require("../Vitastore/case/addDifferentEDX");

async function execute() {
  // for (let i = 0; i < 10; i++) {
  try {
    // await doLogin();
    // await doRegist();
    await doCreateAddress();
    // await doEditAddress();
    // await doDeleteAddress();
    // await doAddCart();
    // await doAddOneEDX();
    // await doAddMuchEDX();
    // await doAddOneEDM();
    // await doAddMuchEDM();
    // await doAddDifferentEDM();
    // await doAddDifferentEDX();
  } catch (error) {
    await console.log(error);
  } finally {
    await console.log("Selamat sudah berhasil eksekusi skrip");
  }
}
// }

execute();
