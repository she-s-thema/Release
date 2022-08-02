import config from '../../firebase.json';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const app = initializeApp(config);

const Auth = getAuth(app);

export const login = async ({ email, password }) => {
    const { user } = await Auth.signInWithEmailAndPassword(email, password);
    return user;
};

export const signup = async ({ email, password }) => {
    const {user} = await Auth.createUserWithEmailAndPassword(email, password);
    return user;
};
