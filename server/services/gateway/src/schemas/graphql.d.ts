
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface LoginUser {
    email: string;
    password: string;
}

export interface RegisterUser {
    email: string;
    password: string;
    password_confirmation: string;
    name: string;
    seller: boolean;
}

export interface Address {
    address_1: string;
    address_2: string;
    city: string;
    state: string;
    country: string;
    zip: number;
}

export interface IMutation {
    login(data: LoginUser): User | Promise<User>;
    register(data: RegisterUser): User | Promise<User>;
}

export interface IQuery {
    users(): User[] | Promise<User[]>;
    me(): User | Promise<User>;
}

export interface User {
    id: string;
    name: string;
    password: string;
    seller: boolean;
    address: Address;
    created_at: DateTime;
}

export type DateTime = any;
