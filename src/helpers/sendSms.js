import dotenv from "dotenv";
dotenv.config();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_ID
);
//Hey anne, your  ordering accepted The application Id:233435
const sendSms = (
  userName,
  Products,
  payment,
  applicationStatus,
  applicationId,
  userphone
) => {
const status=  applicationStatus == "paid"? " Succefull paid": " not yet paid "
  client.messages
    .create({
      body:
        "hey " +
          userName +
          ", your " +
          Products.toString() +
          " products, Amount to Pay: " +
          payment +
          " frw " +status
          + " the application Id: " + applicationId,
      from: "+15074282144",
      to: userphone,
    })
    .then((message) => console.log(message.sid));
};
export default sendSms;
