const Conversation =  require('../models/Conversation-model')
const User = require('../models/User')

const getConversations = async (useId) => {
  try {
    return await Conversation.find({ members: useId })
      .populate("members", "firstName lastName")
      .populate("messages.from", "FirstName LastName");
  } catch (e) {
    throw new Error(e.message);
  }
};

const addMessage = async (body, owner, topicId) => {
  let newPost = await Post.create({ body, owner });
  try {
    let updatedTopic = await Topic.findByIdAndUpdate(
      topicId,
      {
        $push: { posts: newPost },
      },
      { new: true }
    );
    // console.log(updatedTopic)

    // (owner, {
    //   $push: { fileUrl: file._id },
    // });
    // return await Post.create({ body: body, owner, topic:topicId}, { new: true })
  } catch (error) {
    throw new Error(error);
  }
};

const createNewConversation = async (topicId) => {
  try {
    return await Post.find({ topicId });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getConversations,
  createNewConversation,
  addMessage,
};
