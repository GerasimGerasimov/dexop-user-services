import express, { Application } from 'express';
import { sequelize } from '../config/Database';
import * as connect from 'connect';
import * as sqliteConnect from 'connect-sqlite3';
import { IAuthenticationService } from '../data/interfaces/IAuthenticationService';
import { Users } from '../data/models/Users';

class AuthenticationService implements IAuthenticationService {
    private connect: any;
    private symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQSTUVWXYZ0123456789";
    public sessionKey = '';

    constructor () {
        this.generateRandomKey();
    };

    public async login (id: number, password: string) : Promise<void> {
        const user = await Users.findOne({
            where: {
                id: id,
                password: password
            }
        });

        try {
            if (user !== null) {
                user.hasLoggedIn = true;
                await user.save();
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    public async logout (id: number) : Promise<void> {
        const user = await Users.findOne({
            where: { id: id }
        });

        try {
            if (user !== null) {
                user.hasLoggedIn = false;
                await user.save();
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    private generateRandomKey () : string {
        let key = '';

        for (let i = 0; i < 15; i++) {
          key += this.symbols.charAt(Math.floor(Math.random() * this.symbols.length));
        }

        return this.sessionKey = key.slice(0, 5) + '-' + key.slice(5, 5) + '-' + key.slice(10, 5);
      };
}

export const authService = new AuthenticationService();