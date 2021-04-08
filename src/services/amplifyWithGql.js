const { Auth, API } = require("aws-amplify");
const mutations = require("../graphql/mutations.js");
const queries = require("../graphql/queries");

export async function signup(username, email, password, tenant) {
  const user = await Auth.signUp({
    username,
    password,
    attributes: { email, "custom:tenant": tenant },
  });
  console.log("the user signed up ", user);
}
export async function signupWithUserInfo(userInfo) {
  const user = await Auth.signUp(userInfo);
  console.log("the user signed up ", user);
}

export async function confirmSignUp(username, code) {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    console.log("Error in confirmSignUp:", error);
  }
}

export async function signin(username, password) {
  try {
    const user = await Auth.signIn(username, password);
    console.log("the user   ", user);
    return user;
  } catch (error) {
    console.log("Error in SignIn:", error);
  }
}

export async function signout() {
  try {
    await Auth.signOut({global:true});
  } catch (error) {
    console.log("Error in SignOut:", error);
  }
}

export async function createModelItem(modelName, itemData) {
    try {
        const result = await API.graphql({
        query: mutations["create" + modelName],
        variables: {
            input: itemData,
            },
        });
        console.log("created ", modelName, " id ", itemData, "  :: ", result);
    } catch (error) {
        console.error(error);
    }
}


export async function deleteModelItem(modelName, itemID) {
  try {
    const result = await API.graphql({
      query: mutations["delete" + modelName],
      variables: {
        input: {
          id: itemID,
        },
      },
    });
    console.log("deleted ", modelName, " id ", itemID, "  :: ", result);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Creating a tenant using Admin User.
 * @param {tenantData} specify the input for the Tenant which contains all the tenant Info.
 *  @returns created Tenant data
 */
 export async function createUserSignup(userData) {
    try {
      console.log("tenant Creation");
      const result = await API.graphql({
        query: mutations.createUserSignup,
        variables: {
          input: userData,
        },
      });
      console.log("created Tenant details: ", result);
      return tenant;
    } catch (error) {
      console.error(error);
    }
  }

  /**
 * Creating a tenant using Admin User.
 * @param {tenantData} specify the input for the Tenant which contains all the tenant Info.
 *  @returns created Tenant data
 */
 export async function createInternalAdmin(userData) {
    try {
      console.log("createInternalAdmin started");
      const result = await API.graphql({
        query: mutations.createInternalAdmin,
        variables: {
          input: userData,
        },
      });
      console.log("createInternalAdmin result: ", result);
      return result;
    } catch (error) {
      console.error(error);
    }
  }
  
/**
 * Creating a tenant using Admin User.
 * @param {tenantData} specify the input for the Tenant which contains all the tenant Info.
 *  @returns created Tenant data
 */
export async function createTenants(tenantData) {
  try {
    console.log("tenant Creation");
    const tenant = await API.graphql({
      query: createTenant,
      variables: {
        input: tenantData,
      },
    });
    console.log("created Tenant details: ", tenant);
    return tenant;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Creating a Team using Admin User.
 * @param {teamData} specify the input for the Team which contains all the team Info.
 *  @returns created Team data
 */
export async function createTeams(teamData) {
  try {
    const team = await API.graphql({
      query: mutations.createTeam,
      variables: {
        input: teamData,
      },
    });
    console.log("created Team details: ", team);
    return team;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Creating a User using Admin User.
 * @param {userInfo} Pass the UserInfo details.
 *  @returns created User Data
 */
export async function createUsers(userInfo) {
  try {
    console.log("creating Master Agent");
    const user = await API.graphql({
      query: createUser,
      variables: {
        userInput: userInfo,
      },
    });
    console.log("created MasterAgent details: ", user);
    return user;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Creating a Contact for MasterAgent or SubAgent as logged in User,
 * @param {subAgent} specify the input for the Contact which contains all the Contact Info.
 * @returns updated Contact Data
 */
export async function createUserContact(contact) {
  try {
    console.log("creating Contact");
    const userContact = await API.graphql({
      query: mutations.createContact,
      variables: {
        input: contact,
      },
    });
    console.log("created Contact details: ", userContact);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Update the Details of the Specified Contact,
 * @param {contact} specify the ID and Contact information to Update.
 * @returns updated Contact Data
 */
export async function updateUserContact(contact) {
  try {
    console.log("update Contact");
    const userContact = await API.graphql({
      query: mutations.updateContact,
      variables: {
        input: contact,
      },
    });
    console.log("updated Contact details: ", userContact);
    return userContact;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Delete the Contact by Specifying its ID,
 * @param {contactID} ID of the contact to be deleted.
 * * @returns deleted Contact Data
 */
export async function deleteUserContact(contactID) {
  try {
    console.log("delete Contact");
    const userContact = await API.graphql({
      query: mutations.deleteContact,
      variables: {
        input: { id: contactID },
      },
    });
    console.log("deleted Contact details: ", userContact);
    return userContact;
  } catch (error) {
    console.error(error);
  }
}

/**
 * listContacts,
 * * @returns deleted Contact Data.
 */
export async function listUserContact() {
  try {
    const allContacts = await API.graphql({ query: queries.listContacts });
    console.log(
      "the list of Contacts : ",
      JSON.stringify(allContacts.data.listContacts.items)
    );
    return JSON.stringify(allContacts.data.listContacts.items);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Creating a Connection between User and Team,
 * @param {subAgent} specify the input userId and TeamId of user and Team.
 */
export async function createUserTeams(userteam) {
  try {
    console.log("creating userTeam");
    const userTeam = await API.graphql({
      query: createUserTeam,
      variables: {
        input: userteam,
      },
    });
    console.log("created userTeam details: ", userTeam);
    return userTeam;
  } catch (error) {
    console.error(error);
  }
}
