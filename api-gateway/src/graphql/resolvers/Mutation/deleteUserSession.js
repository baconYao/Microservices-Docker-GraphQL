import UsersService from "#root/adapters/UsersService";

const deleteUserSessionResolver = async (obj, { sessionId }, context) => {
  console.log("deleteUserSessionResolver111");
  await UsersService.deleteUserSession({ sessionId });
  context.res.clearCookie("userSessionId");
  console.log("deleteUserSessionResolver");
  return true;
};

export default deleteUserSessionResolver;