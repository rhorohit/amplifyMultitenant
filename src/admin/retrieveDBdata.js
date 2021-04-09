import { signin, signout } from './util.js';
import cfg from "./sampleDataConfig.js";
import defaultExport from "../aws-exports";
import * as queries from '../graphql/queries';
import { Amplify, API, graphqlOperation } from "aws-amplify";

Amplify.configure(defaultExport);
fetchAllData()

async function fetchAllData() {
    console.log("Executing List Queries for user \n");
    try {
        await queryData(cfg.Users[1].user.username, cfg.Users[1].user.password);
        await queryData(cfg.Users[2].user.username, cfg.Users[2].user.password);
        await queryData(cfg.Users[3].user.username, cfg.Users[3].user.password);

    }
    catch (error) {
        console.error(error);
    }
}

async function queryData(email, password) {
    try {
        // console.log("Fetch Contacts \n")
        console.log("\nEmail: " + email + "\nPassword: " + password);
        const queryData = await signin(email, password).then(async data => {
            // console.log(data);
            await fetchTenants();
            await fetchTeams();   // Retrieveing valid data for all users
            await fetchUsers(); 
        });
    } catch (error) {
        console.error(error);
    }
    console.log("Signing Out", "\n\n")
    signout();
}

async function fetchTenants() {
    console.log("Tenants: \n");
    const allTenants = await API.graphql({ query: queries.listTenants });
    console.log("Fetched Tenants: ", allTenants.data.listTenants.items, "\n\n");
    return JSON.stringify(allTenants.data.listTenants.items)
}

async function fetchTeams() {
    console.log("Teams: \n");
    const allTeams = await API.graphql({ query: queries.listTeams });
    console.log("Fetched Teams: ", allTeams.data.listTeams.items, "\n\n");
    return JSON.stringify(allTeams.data.listTeams.items)
}

async function fetchUsers() {
    console.log("Users: \n");
    const allUsers = await API.graphql({ query: queries.listUsers });
    console.log("Fetched Users: ", allUsers.data.listUsers.items, "\n\n");
    return JSON.stringify(allUsers.data.listUsers.items)
}