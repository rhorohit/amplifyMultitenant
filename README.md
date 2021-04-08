# amplifyMultitenant

Issue: 
We are implementing multitenant functionality using amplify. For that we have written auth rules and using Auth PreToken genertaion to add claims and groups at the time of user login.

It is working as expected in AWS Console Appsync GraphiQL. But the same is partially working when we are testing with Postman API call.

i.e. I am able to fetch records for Teams model using Postman API call but not for User model.

Pre-requisites for project ( install the below softwares) - 
1) node 14.15.0,
2) npm 6.14+
3) amplify cli - 4.45.0

Steps to reproduce the issue:

1) Clone the project and run "amplify configure" command to create a Profile with AWS region and IAM user name.
2) Now run "amplify init" command. You have to answer few questions as below:
    ? Do you want to use an existing environment? No
    ? Enter a name for the environment <provide an env name other than dev>
    ? Choose your default editor: Visual Studio Code
    ? Select the authentication method you want to use: AWS profile
    ? Please choose the profile you want to use <mention profile name created in step 1>

3) run "npm install" to install all the dependencies.
4) run "amplify push".
5) Once push completes, you will get the GraphQL endpoint and GraphQL API KEY.
6) Now update your environment's GraphQL endpoint and GraphQL API KEY in .\amplify\backend\function\amplifyauthprojectc0e31684PreTokenGeneration\src\config.json
7) Again run "Amplify Push"
8) Goto Cognito service, click "Manage User Pools", Create 4 Cognito Users with the name as
    a) internalAdmin@gmail.com
    b) tntAdmin1@gmail.com
    c) tmanager@gmail.com
    d) subAgent@gmail.com
   By default all these users are assined with a temporary password "AB123456". Which we have to change at later point in time (step 11)
9) Now add "internalAdmin@gmail.com" user to InternalAdmin cognito group (you no need to create this group, it will already be there)
10)  Since all the changes are pushed to AWS. Login to your AWS account and open AWS Appsync service. 
11) Inside your appsync project, click "Queries". Select authorization provider as Amazon Cognito User Pool.
12) All the cognito users created in step 8 has temporary passwords. We have to login one by one with each cognito user to change the password.
13) Click login, select clientweb ID and provide Username and Password as "AB123456".
14) Upon login, AWS will prompt you to change the password. Please provide the new password same as the temporary password (AB123456) and login.
15) With this Environment is ready to use. Now let's do the data setup.

**Data Setup:**

To load sample data run below command from project's root
  > node -r esm ./src/admin/adminData.js
  
**Use Case:  Execute listTenants, listUsers and listTeams queries**

**Expected Result:**
1) TenantAdmin should have access to all the Tenants, all the Teams and the User records that belongs to the Tenant.
2) TeamManager should have access to his Team and all the Users within his teams. He should also have read access to the tenant info.
3) SubAgent should have access only to his own User record and can't have access to Tenants, Teams and other Users data.
4) **Results should be consistant when data request is sent from any source, either it's AWS Amplify Appsync Console or Node script or Postman API call...**

We tested the above "Use Case" through 3 different modes to validate the results:

**1) AWS Appsync GraphiQL Explorer:**

Execute below queries in appsync graphiql explorer to validate the results: 

query MyQuery {
  listTenants {
    items {
      name
    }
  }
}

query MyQuery {
  listTeams {
    items {
      id
      teamName
    }
  }
}
query MyQuery {
  listUsers {
    items {
      id
      firstName
      email
    }
  }
}

**Actual Result of the testing**
1) TenantAdmin is able to access all the available records - same as expected result.
2) TeamManager is able to access his Team info, all the user data within his team and read access to tenant info - same as expected result.
3) SubAgent is able to access only his own user record - same as expected result.

**2) Node Script to execute listTenants, listUsers and listTeams queries**
**run below command to validate the provided Use Case:**
  > node -r esm ./src/admin/retrieveDBdata.js

**Actual Result of the testing**
1) TenantAdmin is able to acess all the available records - same as expected result.
2) TeamManager is able to access his Team info - same as expected result.
3) TeamManager is **NOT** able to access **ANY** user data or tenant info - **Failed Scenario**
4) SubAgent is **NOT** able to access his own user record - **Failed Scenario**


**3) Postman API Call to execute listTenants, listUsers and listTeams queries:**
**Complete the below setup to trigger an API call to validate the provided Use Case:**
1) Login to Postman.
2) Create a new API request.
3) Select method as POST.
4) In the request URL, provide your appsync GraphQL endpoint.
5) Click Authorization tab and select Type as OAuth2.0. Now, we have to generate Access Token to make send a successful request. Below link provides step by step process to generate a valid token
  > https://stackoverflow.com/questions/52287506/how-do-i-integrate-amazon-cognito-login-in-postman
6) Once a token is generated, go to Body tab and select GraphQL and provide listTenants/ listTeams/ listUsers queries (one at a time) and click on Send button.
7) You will be able to check the response in the lower part of the Body section.

**Actual Result of the testing**
1) TenantAdmin is able to acess all the available records - same as expected result.
2) TeamManager is able to access his Team info - same as expected result.
3) TeamManager is **NOT** able to access **ANY** user data or tenant info - **Failed Scenario**
4) SubAgent is **NOT** able to access his own user record - **Failed Scenario**

Find the screenshots of the results of my Postman API call as below:

**ListTeams**
![image](https://user-images.githubusercontent.com/68864040/113997229-90087100-9875-11eb-8681-ba93f95c0f80.png)

**ListUsers**
![image](https://user-images.githubusercontent.com/68864040/113997477-ce9e2b80-9875-11eb-87a4-6bbc95ba4e3e.png)
