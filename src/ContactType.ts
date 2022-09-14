export interface ContactType{
        id:string;
        name:string;
        address:string;
        friendsInfo:[{
                name:string;
                address:string
        }]
}