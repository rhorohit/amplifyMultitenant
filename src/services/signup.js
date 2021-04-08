const config = require("../tests/config.js");
import ampconfigure from '../aws-exports.js'
const { Amplify, Auth, DataStore, API } = require("aws-amplify");
import * as models from '../models'
const mutations = require("../graphql/mutations.js");
const queries = require("../graphql/queries.js");
import {confirmSignUp, signin, signout, signup} from './amplifyWithGql.js'

Amplify.configure(ampconfigure);
const user = config.users.adminUser
//signup(user.username,user.username,user.password, user.tenant)

confirmSignUp(user.username, "080176") // code from your mail


