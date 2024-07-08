export interface IAuthenticationService {
    login (id: number, password: string) : Promise<void>;
    logout (id: number) : Promise<void>;
}
