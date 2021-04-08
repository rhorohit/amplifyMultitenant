const cfg = require("./sampleDataConfig.js");
const mutations = require("../graphql/mutations.js");
const { API } = require("aws-amplify");

exports.handler = async () => {
  console.log("Data loading  started")
  const result1 = await loadAllData()
  // const result2 = await deleteAllData()
  console.log("Data loading completed")
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
    // console.log("creating Record: \n")
    const itemData = await API.graphql({
      query: mutations["create" + tableName],
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
  // console.log("Delete All Records")
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
    deleteItem("User", ele.subAgent.id)
  });
  cfg.UserTeams.forEach(ele => {
    deleteItem("UserTeam", ele.userTeam.id)
  });
};

async function deleteItem(tableName, itemID) {
  try {
    console.log("Deleting Records")
    const result = await API.graphql({
      query: mutations["delete" + tableName],
      variables: {
        input: {
          id: itemID
        }
      },
    });
    console.log("deleted ", tableName, " id ", itemID, "  :: ", result)
  } catch (error) {
    console.error(error);
  }
}