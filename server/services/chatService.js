const { connect } = require("getstream");
const StreamChat = require("stream-chat").StreamChat;

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const chatSignupToken = async (userId) => {
  try {
    const serverClient = connect(api_key, api_secret, app_id);

    const userToken = await serverClient.createToken(userId);
    return userToken;
  } catch (e) {
    throw new Error(e.message);
  }
};

const chatLoginToken = async (email) => {
  try {
    const serverClient = connect(api_key, api_secret, app_id);
    const client = StreamChat.getInstance(api_key, api_secret);

    // const { users } = await client.queryUsers({ email: email });

    const token = serverClient.createUserToken(email);

    // return { token, fullName: users[0].fullName, username, userId: users[0].id};
    return { token };
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  chatSignupToken,
  chatLoginToken,
};
