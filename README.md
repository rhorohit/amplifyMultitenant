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

3) run "npm install" to install all the dependencies
4) run "amplify mock" to check if any compilation issue exists and also to test it locally.
5) run "amplify push", yo will get the GraphQL endpoint and GraphQL API KEY
6) Now update your environment's GraphQL endpoint and GraphQL API KEY in .\amplify\backend\function\amplifyauthprojectc0e31684PreTokenGeneration\src\config.json
7) run "Amplify Push"
8) Goto Cognito service, click "Manage User Pools", Create 4 Cognito Users with the name as
    a) internalAdmin@gmail.com
    b) tntAdmin1@gmail.com
    c) tmanager@gmail.com
    d) subAgent@gmail.com
   By default all these users are assined with a temporary password "AB123456". Which we have to change at later point in time (step 11)
9) Now add "internalAdmin@gmail.com" user to InternalAdmin cognito group (you no need to create this group, it will already be there)
9)  Since all the changes are pushed to AWS. Login to your AWS account and open AWS Appsync service. 
10) Inside your appsync project, click "Queries". Select authorization provider as Amazon Cognito User Pool.
11) All the cognito users created in step 8 has temporary passwords. We have to login one by one with each cognito user to change the password.
12) Click login, select clientweb ID and provide Username and Password as "AB123456".
13) Upon login, AWS will prompt you to change the password. Please provide the new password same as the temporary password (AB123456) and login.
14) With this Environment is ready to use. Now let's do the data setup.

**Data Setup:**

To load sample data run the below command from project's root
  > node -r esm ./src/admin/adminData.js
  
**Data Retrieval:**

**Node Script to retrieve data:**
run below command to fetch the records from DB
  > node -r esm ./src/admin/retrieveDBdata.js
  
Find the results as below when the above script is executed:
    a) User - Tenant Admin => Fetches Tenant, Team and User recods
    b) User - Team Manager => Fetches Team records only but it should fetch User records as well
    c) User - Sub Agent => It fetches nothing but it should fetch User records.
    
**Postman API Call:**
i) UserRole: Team Manager => This user is able to retrieve Team data.

![image](https://user-images.githubusercontent.com/68864040/113997229-90087100-9875-11eb-8681-ba93f95c0f80.png)

ii) UserRole: Team Manager => The same user is not able to retrieve User data.

![image](https://user-images.githubusercontent.com/68864040/113997477-ce9e2b80-9875-11eb-87a4-6bbc95ba4e3e.png)

**Appsync GraphiQL Explorer**
UserRole: Team Manager => This user is able to retrieve Team as well as User records

![image](https://user-images.githubusercontent.com/68864040/113997903-32285900-9876-11eb-8229-2273c3764dee.png)

**Expected Result:**
Results should be consistant when fetch request triggers from any source, either it's AWS Amplify Appsync Console or Node script or Postman API call...

Few Useful Queries:

**List Tenants:**
query MyQuery {
  listTenants {
    items {
      id
      name
    }
  }
}

**List Teams:**
query MyQuery {
  listTeams {
    items {
      id
      teamName
      tenantID
    }
  }
}

**List Users:**
query MyQuery {
  listUsers {
    items {
      id
      firstName
      email
    }
  }
}

