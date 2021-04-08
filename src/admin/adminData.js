
import defaultExport from "./../aws-exports";
const amplifyWithGql = require("../services/amplifyWithGql")
const { Amplify} = require("aws-amplify");
Amplify.configure(defaultExport);
const MODULE_NAMES = [ "createAdminUser", "loadSampleData"] // "loadInsurers", "CarePremiumDataLoader" ] //, "CarePremiumDataLoader"]
const modules = MODULE_NAMES.map(name => require(`./${name}`));

async function handler1(){
  for (let i = 0; i < modules.length; i += 1) {
    const { handler } = modules[i];
    await handler();
  }

  await amplifyWithGql.signout()
};


handler1()