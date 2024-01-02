"use strict";

const hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hey there I'm Amash, a passionate DevOps enthusiast!!",
      },
      null,
      2
    ),
  };
};

module.exports = {
    handler: hello,
};
