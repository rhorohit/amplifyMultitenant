const { Amplify, Auth } = require('aws-amplify');
// import Amplify, {Auth} from 'aws-amplify';
// const config = require('./config.js');

export async function signup(username, email, password, tenant) {
    const user = await Auth.signUp({
        username,
        password,
        attributes: { email, "custom:tenant": tenant },
    });
    console.log("the user signed up ", user)
}


export async function confirmSignUp(username, code){
    try {
        await Auth.confirmSignUp(username, code);
    } catch (error) {
        console.log("Error in confirmSignUp:" , error)
    }
}

export async function signin(username, password) {
    try {
        const user = await Auth.signIn(username, password);
        console.log("the user   ", user.attributes.email);
        return user;
    } catch (error) {
        console.log("Error in SignIn:" , error)
    }
}

export async function signout(){
    try {
        await Auth.signOut({global:true})
    } catch (error) {
        console.log("Error in SignOut:" , error)
    }
}
