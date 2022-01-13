import dotenv from "dotenv";
dotenv.config();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_ID
);
//Hey anne, your  ordering accepted The application Id:233435
const sendSms = (
  userName,
  ProductName,
  applicationStatus,
  applicationId,
  userphone
) => {
  client.messages.create({
    body:
      "hey " +
      userName +
      ", your " +
      ProductName +
      " ordering product " +
      applicationStatus +
      " the application Id: " +
      applicationId,
      from:"+14156972188",
      to:userphone
  }).then((message)=>console.log(message.sid));
};
export default sendSms;