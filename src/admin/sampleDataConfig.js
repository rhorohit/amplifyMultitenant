module.exports = {
    Users: [
        {
            // adminUser
            user: {
                userType: "Internal Admin",
                username: "internalAdmin@gmail.com",
                password: "AB123456"
            }
        },
        {
          // IntAdmin1
          user: {
              userType: "Tenant Admin 1",
              username: "tntAdmin1@gmail.com",
              password: "AB123456",
              tenant: "tenant1"
          }
      },
        {
            // tmanager1
            user: {
                userType: "Team Manager 1",
                username: "tmanager@gmail.com",
                password: "AB123456",
                tenant: "tenant1"
            }
        },
        {
            // subAgent1
            user: {
                userType: "Sub Agent 1",
                username: "subAgent@gmail.com",
                password: "AB123456",
                tenant: "tenant1"
            }
        },
    ],
    Tenants: [
        {
            tenant: {
                id: "tenant1",
                name: "Elite Brokerage Agency",
                details: "Elite Brokerage Agency details"
            }
        }
    ],
    Teams: [
        {
            team: {
                id: "team1",
                teamName: "DEV Team",
                tenantID: "tenant1"
            }
        }
    ],
    TenantAdmins: [
        {
            tenantAdmin: {
                id: "tntAdmin1",
                firstName: "tntAdmin1",
                lastName: "",
                email: "tntAdmin1@gmail.com",
                userRole: "TenantAdmin",
                tenantID: "tenant1"
            }
        }
    ],
    TeamManagers: [
        {
            teamManager: {
                id: "tmanager1",
                firstName: "tmanager1",
                lastName: "",
                email: "tmanager@gmail.com",
                userRole: "TeamManager",
                tenantID: "tenant1"
            }
        }
    ],
    SubAgents: [
        {
            subAgent: {
                id: "subAgent1",
                firstName: "subAgent1",
                lastName: "",
                email: "subAgent@gmail.com",
                userRole: "SubAgent",
                tenantID: "tenant1",
            }
        }
    ],
    UserTeams: [
        {
            userTeam: {
                id: "userTeam1",
                userID: "tntAdmin1",
                teamID: "team1",
                tenantID: "tenant1",
            }
        },
        {
            userTeam: {
                id: "userTeam2",
                userID: "tmanager1",
                teamID: "team1",
                tenantID: "tenant1",
            }
        },
        {
            userTeam: {
                id: "userTeam3",
                userID: "subAgent1",
                teamID: "team1",
                tenantID: "tenant1",
            }
        }
    ],
  };