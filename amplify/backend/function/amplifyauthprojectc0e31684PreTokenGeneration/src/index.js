/*
  this file will loop through all js modules which are uploaded to the lambda resource,
  provided that the file names (without extension) are included in the "MODULES" env variable.
  "MODULES" is a comma-delimmited string.
*/
var axios = require("axios");

const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

var cfg = require('./config.json');

const getUserQuery = gql`query userByEmail($email: String) {
  userByEmail(email: $email) {
    items {
      email
      firstName
      id
      lastName
      userRole
      teams {
        items {
          id
          team {
            id
            teamName
          }
        }
      }
      tenant {
        id
        teams {
          items {
            id
            tenantID
            teamName
          }
        }
      }
    }
  }
}`;

exports.handler = async (event, context, callback) => {
  console.log(" 'Event': ", JSON.stringify(event))

  const userEmail = event.request.userAttributes.email;
  console.log("User Email: ", userEmail)
  try {
    const result = await genPreToken(event)
    console.log("result::event.response --- \n", JSON.stringify(event.response))
  } catch (err) {
    console.log(err);
  }
  callback(null, event);
};

async function genPreToken(event) {

  console.log("Inside genPreToken ...........")
  // get the user ID (Cognito sub)
  const userSub = event.request.userAttributes.email;
  // get the user groups assigned through Cognito groups
  const groups = event.request.groupConfiguration.groupsToOverride;

  console.log("userSub and groups:  " + userSub + "   " + groups)

  // get the calling User record from the GraphQL API
  // make sure to load the Business with id and all Locations belonging to 
  // the Business as well as all Locations the user is assigned to
  // NOTE: api.gqlCall is a utility method for making AppSync/GraphQL API calls

  const userResp = await getUserByEmail(userSub)

  // make sure we got user data returned from the GQL API call
  if (userResp.data && userResp.data.data.userByEmail) {
    console.log("Inside genPreToken If Condition...........")

    var userInfo = userResp.data.data.userByEmail.items[0];
    const role = userInfo.userRole
    const tenantID = userInfo.tenant.id
    console.log("userInfo : ", userInfo)

    const claimsToAddOrOverride = {
      userID: userInfo.id,
      tenantID: tenantID
    };
    const customGroups = [];
     if (!groups.includes('InternalAdmin')) {
       if (role.includes("TenantAdmin")) {
        customGroups.push(tenantID);
        console.log("userInfo.tenant.teams.items  ==> ", userInfo.tenant.teams.items)
        // add all Business Location IDs to customGroups
        userInfo.tenant.teams.items.forEach((item) => {
          customGroups.push(item.id);
        });
       } else if (role.includes("TeamManager")) {
        // add only the specific Location IDs that the user is assigned to
        userInfo.teams.items.forEach((item) => {
          //customGroups.push(item.id);
          customGroups.push(item.team.id);
        });
        claimsToAddOrOverride.teamAdmin = tenantID;
      } else {
        claimsToAddOrOverride.readAccess = tenantID;
      }
    }
    event.response = {
      claimsOverrideDetails: {
        groupOverrideDetails: {
          groupsToOverride: [...groups, ...customGroups],
        },
        claimsToAddOrOverride,
      }
    };
  }
}


async function getUserByEmail(email) {

  console.log("Appsync URL: ", cfg.mynewdev_appsync.url)
  console.log("Region: ", cfg.mynewdev_appsync.region)

  // get the calling User record from the GraphQL API
  // console.log("getUserQuery: ", JSON.stringify(getCognitoUserQuery))
  try {
    const body = {
      query: print(getUserQuery),
      variables: {
        email: email
      },
    };

    console.log("Printing Body Data in json form: \n", JSON.stringify(body))
    const userResp = await axios({
      url: cfg.mynewdev_appsync.url,
      method: "post",
      headers: {
        "x-api-key": cfg.mynewdev_appsync.apiKey,
      },
      data: body,
    });
    console.log("userResp.data.data: .... ", JSON.stringify(userResp.data.data.userByEmail));
    console.log("userResp.data.data.items: .... ", JSON.stringify(userResp.data.data.userByEmail.items[0].id));
    console.log("userResp.data.errors: .... \n", JSON.stringify(userResp.data.errors));
    return userResp
  } catch (err) {
    console.log("In the catch block")
    console.log(err)
  }
}