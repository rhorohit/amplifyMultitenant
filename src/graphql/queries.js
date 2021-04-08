/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const getUserTeam = /* GraphQL */ `
  query GetUserTeam($id: ID!) {
    getUserTeam(id: $id) {
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
export const listUserTeams = /* GraphQL */ `
  query ListUserTeams(
    $filter: ModelUserTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
            teams {
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
            }
            nextToken
          }
        }
      }
      nextToken
    }
  }
`;
