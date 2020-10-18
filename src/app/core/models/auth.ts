interface IAuth {   
    access_token: string;
    token_type: string;
    expires_in: string;
    scope: string;
}


export class Auth implements IAuth {
    access_token: string;
    token_type: string;
    expires_in: string;
    scope: string;
}
