const cfg  = require ("./sampleDataConfig.js");
const mutations = require  ("../graphql/mutations.js");
const queries = require  ("../graphql/queries");
const { API } = require("aws-amplify");


exports.handler = async () => {
  console.log("loading insurers List started")
  await loadAllData()
  console.log("loading insurers List completed.")
};

/**
 * load
 */
async function loadAllData() {
    cfg.Tenants.forEach(ele => {
      console.log(ele.id)
      createData("Tenant", ele.tenant)
    });
    cfg.Teams.forEach(ele => {
      createData("Team", ele.team)
    });
    cfg.TenantAdmins.forEach(ele => {
      createData("User", ele.tenantAdmin)
    });
    cfg.TeamManagers.forEach(ele => {
      createData("User", ele.teamManager)
    });
    cfg.SubAgents.forEach(ele => {
      createData("User", ele.subAgent)
    });
    cfg.UserTeams.forEach(ele => {
      createData("UserTeam", ele.userTeam)
    });
};

async function createData(tableName, itemInfo) {
  try {
    console.log("creating Record: \n", itemInfo)
    const itemData = await API.graphql({
      query: mutations["create"+tableName],
      variables: {
        input: itemInfo
      },
    });
    console.log("Record created ", itemData)
  } catch (error) {
    console.error(error);
  }
}

async function deleteAllData() {
  let email = cfg.users.adminUser.username;
  let password = cfg.users.adminUser.password;
  const AdminUser = await signin(email, password).then(async () => {
    cfg.Tenants.forEach(ele => {
      deleteItem("Tenant", ele.tenant.id)
    });
    cfg.Teams.forEach(ele => {
      deleteItem("Team", ele.team.id)
    });
    cfg.TenantAdmins.forEach(ele => {
      deleteItem("User", ele.tenantAdmin.id)
    });
    cfg.TeamManagers.forEach(ele => {
      deleteItem("User", ele.teamManager.id)
    });
    cfg.SubAgents.forEach(ele => {
      deleteItem("User", ele.SubAgent.id)
    });
    console.log("Test")
      .then(() => {
        console.log("Signed Out..")
        signout();
      })
      .catch(() => {
        console.log("Signed Out..")
        signout();
      });
  });
};

async function deleteItem(tableName, itemID){
  try {
    console.log("creating first tenant")
    const result = await API.graphql({
      query: mutations["delete"+tableName],
      variables: {
        input: {
          id : itemID 
        }
      },
    });
    console.log("deleted ", tableName, " id " , itemID, "  :: " , result)
  } catch (error) {
    console.error(error);
  }
}