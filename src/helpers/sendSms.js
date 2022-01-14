
import dotenv from "dotenv";

dotenv.config();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_ID
);

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

