export const createNewUser = (
  userDetails,
  userDBReference,
  onUserCreationCallback
) => {
  userDBReference.create(
    userDetails.userName,
    userDetails.password,
    onUserCreationCallback
  );
};

export const getAllMessages = async (chatDBReference, callBack) => {
  let allMessages = [];
  await chatDBReference?.map().on((data) => {
    allMessages.push({
      alias: data.alias,
      message: data.message,
      isPublished: data.isPublished,
      dttm: data.dttm,
    });
  });
  callBack(allMessages);
};

export const createNewMessage = async (
  chatDBReference,
  messageString,
  userDetails
) => {
  chatDBReference?.set({
    alias: userDetails?.alias,
    message: messageString,
    isPublished: true, // for content moderation,
    dttm: Date.now(), //created or updated date and time
  });
};
