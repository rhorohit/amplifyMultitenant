# amplifyMultitenant

Issue: 
We are implementing multitenant functionality using amplify. For that we have written auth rules and using Auth PreToken genertaion to add claims and groups at the time of user login.

It is working as expected in AWS Console Appsync GraphiQL. But the same is partially working when we are testing with Postman API call.

i.e. I am able to fetch records for Teams model using Postman API call but not for User model.

Steps to reproduce the issue:

1) Create a Cognito User and add that to InternalAdmin cognito group
2) Update you environment details in .\amplify\backend\function\amplifyauthprojectc0e31684PreTokenGeneration\src\config.json
3) load sample data run the below command from amplify home path
  > node -r esm ./src/admin/adminData.js
4) run below command to fetch the records from DB
  > node -r esm ./src/admin/retrieveDBdata.js
5) Find the results fetched when script in step 4 will be executed:
    a) User - Tenant Admin => Fetches Tenant, Team and User recods
    b) User - Team Manager => Fetches Team records only but it should fetch User records as well
    c) User - Sub Agent => It fetches nothing.
    
