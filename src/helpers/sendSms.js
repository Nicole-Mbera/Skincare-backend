import dotenv from "dotenv";

dotenv.config();
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_ID
);

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
      from: "+12676134616",
      to: userphone,
    })
    .then((message) => console.log(message.sid));
};
export default sendSms;
