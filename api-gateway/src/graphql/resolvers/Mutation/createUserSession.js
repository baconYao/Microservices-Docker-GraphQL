import UsersService from "#root/adapters/UsersService";

const createUserSessionResolver = async (obj, { email, password }, context) => {
  const userSession = await UsersService.createUserSession({ email, password });
  console.log(userSession);
  context.res.cookie("userSessionId", userSession.id, { httpOnly: true });

  return userSession;
};

export default createUserSessionResolver;