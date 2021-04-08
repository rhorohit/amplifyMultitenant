/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant {
    onCreateTenant {
      id
      name
      details
      createdAt
      updatedAt
      teams {
        items {
          id
          teamName
          tenantID
          createdAt
          updatedAt
          users {
            items {
              id
              teamID
              userID
              tenantID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant {
    onUpdateTenant {
      id
      name
      details
      createdAt
      updatedAt
      teams {
        items {
          id
          teamName
          tenantID
          createdAt
          updatedAt
          users {
            items {
              id
              teamID
              userID
              tenantID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant {
    onDeleteTenant {
      id
      name
      details
      createdAt
      updatedAt
      teams {
        items {
          id
          teamName
          tenantID
          createdAt
          updatedAt
          users {
            items {
              id
              teamID
              userID
              tenantID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
      id
      email
      tenantID
      firstName
      lastName
      userRole
      createdAt
      updatedAt
      tenant {
        id
        name
        details
        createdAt
        updatedAt
        teams {
          items {
            id
            teamName
            tenantID
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
          nextToken
        }
      }
      teams {
        items {
          id
          teamID
          userID
          tenantID
          createdAt
          updatedAt
          user {
            id
            email
            tenantID
            firstName
            lastName
            userRole
            createdAt
            updatedAt
            tenant {
              id
              name
              details
              createdAt
              updatedAt
            }
            teams {
              nextToken
            }
          }
          team {
            id
            teamName
            tenantID
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
      id
      email
      tenantID
      firstName
      lastName
      userRole
      createdAt
      updatedAt
      tenant {
        id
        name
        details
        createdAt
        updatedAt
        teams {
          items {
            id
            teamName
            tenantID
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
          nextToken
        }
      }
      teams {
        items {
          id
          teamID
          userID
          tenantID
          createdAt
          updatedAt
          user {
            id
            email
            tenantID
            firstName
            lastName
            userRole
            createdAt
            updatedAt
            tenant {
              id
              name
              details
              createdAt
              updatedAt
            }
            teams {
              nextToken
            }
          }
          team {
            id
            teamName
            tenantID
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
      id
      email
      tenantID
      firstName
      lastName
      userRole
      createdAt
      updatedAt
      tenant {
        id
        name
        details
        createdAt
        updatedAt
        teams {
          items {
            id
            teamName
            tenantID
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
          nextToken
        }
      }
      teams {
        items {
          id
          teamID
          userID
          tenantID
          createdAt
          updatedAt
          user {
            id
            email
            tenantID
            firstName
            lastName
            userRole
            createdAt
            updatedAt
            tenant {
              id
              name
              details
              createdAt
              updatedAt
            }
            teams {
              nextToken
            }
          }
          team {
            id
            teamName
            tenantID
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      teamName
      tenantID
      createdAt
      updatedAt
      users {
        items {
          id
          teamID
          userID
          tenantID
          createdAt
          updatedAt
          user {
            id
            email
            tenantID
            firstName
            lastName
            userRole
            createdAt
            updatedAt
            tenant {
              id
              name
              details
              createdAt
              updatedAt
            }
            teams {
              nextToken
            }
          }
          team {
            id
            teamName
            tenantID
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      teamName
      tenantID
      createdAt
      updatedAt
      users {
        items {
          id
          teamID
          userID
          tenantID
          createdAt
          updatedAt
          user {
            id
            email
            tenantID
            firstName
            lastName
            userRole
            createdAt
            updatedAt
            tenant {
              id
              name
              details
              createdAt
              updatedAt
            }
            teams {
              nextToken
            }
          }
          team {
            id
            teamName
            tenantID
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      teamName
      tenantID
      createdAt
      updatedAt
      users {
        items {
          id
          teamID
          userID
          tenantID
          createdAt
          updatedAt
          user {
            id
            email
            tenantID
            firstName
            lastName
            userRole
            createdAt
            updatedAt
            tenant {
              id
              name
              details
              createdAt
              updatedAt
            }
            teams {
              nextToken
            }
          }
          team {
            id
            teamName
            tenantID
            createdAt
            updatedAt
            users {
              nextToken
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateUserTeam = /* GraphQL */ `
  subscription OnCreateUserTeam {
    onCreateUserTeam {
      id
      teamID
      userID
      tenantID
      createdAt
      updatedAt
      user {
        id
        email
        tenantID
        firstName
        lastName
        userRole
        createdAt
        updatedAt
        tenant {
          id
          name
          details
          createdAt
          updatedAt
          teams {
            items {
              id
              teamName
              tenantID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        teams {
          items {
            id
            teamID
            userID
            tenantID
            createdAt
            updatedAt
            user {
              id
              email
              tenantID
              firstName
              lastName
              userRole
              createdAt
              updatedAt
            }
            team {
              id
              teamName
              tenantID
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      team {
        id
        teamName
        tenantID
        createdAt
        updatedAt
        users {
          items {
            id
            teamID
            userID
            tenantID
            createdAt
            updatedAt
            user {
              id
              email
              tenantID
              firstName
              lastName
              userRole
              createdAt
              updatedAt
            }
            team {
              id
              teamName
              tenantID
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUserTeam = /* GraphQL */ `
  subscription OnUpdateUserTeam {
    onUpdateUserTeam {
      id
      teamID
      userID
      tenantID
      createdAt
      updatedAt
      user {
        id
        email
        tenantID
        firstName
        lastName
        userRole
        createdAt
        updatedAt
        tenant {
          id
          name
          details
          createdAt
          updatedAt
          teams {
            items {
              id
              teamName
              tenantID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        teams {
          items {
            id
            teamID
            userID
            tenantID
            createdAt
            updatedAt
            user {
              id
              email
              tenantID
              firstName
              lastName
              userRole
              createdAt
              updatedAt
            }
            team {
              id
              teamName
              tenantID
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      team {
        id
        teamName
        tenantID
        createdAt
        updatedAt
        users {
          items {
            id
            teamID
            userID
            tenantID
            createdAt
            updatedAt
            user {
              id
              email
              tenantID
              firstName
              lastName
              userRole
              createdAt
              updatedAt
            }
            team {
              id
              teamName
              tenantID
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUserTeam = /* GraphQL */ `
  subscription OnDeleteUserTeam {
    onDeleteUserTeam {
      id
      teamID
      userID
      tenantID
      createdAt
      updatedAt
      user {
        id
        email
        tenantID
        firstName
        lastName
        userRole
        createdAt
        updatedAt
        tenant {
          id
          name
          details
          createdAt
          updatedAt
          teams {
            items {
              id
              teamName
              tenantID
              createdAt
              updatedAt
            }
            nextToken
          }
        }
        teams {
          items {
            id
            teamID
            userID
            tenantID
            createdAt
            updatedAt
            user {
              id
              email
              tenantID
              firstName
              lastName
              userRole
              createdAt
              updatedAt
            }
            team {
              id
              teamName
              tenantID
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
      team {
        id
        teamName
        tenantID
        createdAt
        updatedAt
        users {
          items {
            id
            teamID
            userID
            tenantID
            createdAt
            updatedAt
            user {
              id
              email
              tenantID
              firstName
              lastName
              userRole
              createdAt
              updatedAt
            }
            team {
              id
              teamName
              tenantID
              createdAt
              updatedAt
            }
          }
          nextToken
        }
      }
    }
  }
`;
