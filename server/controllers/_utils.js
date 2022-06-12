const LessonItem = require("../models/item");

const calculateScore = async (itemId, answer) => {
  const item = await LessonItem.findById(itemId);
  if (!item) {
    throw new Error(
      "Could not calculate score: itemId does not belong to an existing item"
    );
  }
  switch (item.type) {
    case "multiplechoice":
      if (answer === item.content.answer) {
        return 1;
      }
      return 0;
    default:
      return 0;
  }
};

module.exports = { calculateScore };
