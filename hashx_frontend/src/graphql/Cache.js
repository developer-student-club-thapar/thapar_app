import { InMemoryCache, makeVar } from '@apollo/client';
import { userData } from './User.js';

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                cachedUserData: {
                    read() {
                        return userDataVar();
                    }
                }
            }
        }
    }
});



export const userDataVar = makeVar(
    userData
)
