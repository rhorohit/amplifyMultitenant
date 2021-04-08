/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTenant = /* GraphQL */ `
  mutation CreateTenant(
    $input: CreateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    createTenant(input: $input, condition: $condition) {
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
export const updateTenant = /* GraphQL */ `
  mutation UpdateTenant(
    $input: UpdateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    updateTenant(input: $input, condition: $condition) {
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
export const deleteTenant = /* GraphQL */ `
  mutation DeleteTenant(
    $input: DeleteTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    deleteTenant(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createUserTeam = /* GraphQL */ `
  mutation CreateUserTeam(
    $input: CreateUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    createUserTeam(input: $input, condition: $condition) {
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
export const updateUserTeam = /* GraphQL */ `
  mutation UpdateUserTeam(
    $input: UpdateUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    updateUserTeam(input: $input, condition: $condition) {
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
export const deleteUserTeam = /* GraphQL */ `
  mutation DeleteUserTeam(
    $input: DeleteUserTeamInput!
    $condition: ModelUserTeamConditionInput
  ) {
    deleteUserTeam(input: $input, condition: $condition) {
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
