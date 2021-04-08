
const { v4: uuidv4 } = require('uuid');
const amplifyWithGql = require("../services/amplifyWithGql")

exports.handler = async () => {
    let userEmail = "internalAdmin@gmail.com"    
    // await amplifyWithGql.signupWithUserInfo({
    //     username: userEmail,
    //     password: "AB123456",
    //     attributes: { email: userEmail, "custom:tenant": "XCRM", "custom:shouldAutoConfirm" : "true" },
    //   })
    await amplifyWithGql.signin(userEmail, "AB123456")
};

  