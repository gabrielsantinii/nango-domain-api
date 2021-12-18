import { Address } from "../../../shared/interfaces";

export interface UserDto {
    authId: string;
    id: string;
    firstName: string;
    lastName: string;
    birthday?: string;
    profileType: "student" | "educator" | "admin";
    cpfCnpj: string;
    email: string;
    phone: string;
    address: Address;
    createdAt: Date;
    updatedAt: Date;
    inactivatedAt?: Date;
    inactivationReason?: string;
}
