import * as Query from "./Query";
import * as Mutation from "./Mutation";
import UserSession from "./UserSession";        // customize mutation

const resolvers = { Mutation, Query, UserSession };

export default resolvers;