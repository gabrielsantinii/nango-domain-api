import { Address } from "../../../shared/interfaces";
import { UserProfileType } from "../types";

export interface UserDto {
    authId: string;
    id: string;
    firstName: string;
    lastName: string;
    birthday?: string;
    profileType: UserProfileType;
    cpfCnpj: string;
    email: string;
    phone: string;
    address: Address;
    createdAt: Date;
    updatedAt: Date;
    inactivatedAt?: Date;
    inactivationReason?: string;
    institutions: string[]
}
