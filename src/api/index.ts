import axios, { AxiosRequestConfig } from "axios"

interface IUserData {
    name: string;
    email: string;
    id: number;
};

interface ILongUserData extends IUserData {
    tel: number;
}

type LongUserData = { phone: string } & UserCredentials; //расширение типа

//утилити типы
// type UserCredentials = Omit<IUserData, 'name'>; //'name' | 'email'
type UserCredentials = Pick<IUserData, 'name'>; //'name' | 'email'

type PartialUserData = Partial<IUserData> //все поля необязательные или undefined
type RequiredUserData = Required<IUserData> //все обязательные

export const getUserData = async function (config: AxiosRequestConfig) {
    try {
        const res = await axios.get<IUserData[]>('/users', config);
        res.data.map(el => console.log(el))
    } catch (error) {
        
    }
};

export const getUserCredentials = async function (config: AxiosRequestConfig) {
    try {
        const res = await axios.get<ILongUserData[]>('/users', config);
        res.data.map(el => console.log(el));
    } catch (error) {
        
    }
};

