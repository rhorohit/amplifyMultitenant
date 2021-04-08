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

1) Clone the project and do npm install from the root folder.
2) 
3) Create a Cognito User and add that to InternalAdmin cognito group. The password is temporary and you have to login again to change it.
4) You have to update your Internal Admin cognito user email id in ./src/admin/createAdminUser.js. No need to Push this change.
5) Update your environment details in .\amplify\backend\function\amplifyauthprojectc0e31684PreTokenGeneration\src\config.json and Push this to AWS.
6) load sample data run the below command from amplify home path
  > node -r esm ./src/admin/adminData.js
  
**Use Node Script to retrieve data:**
run below command to fetch the records from DB
  > node -r esm ./src/admin/retrieveDBdata.js
  
Find the results fetched when script in step 4 will be executed:
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
