import { LogDto } from "../../../shared/dtos";
import { Address } from "../../../shared/interfaces";
import { UserProfileType } from "../types";

export interface UserDto extends LogDto {
    authId: string;
    firstName: string;
    lastName: string;
    displayName: string;
    birthday?: string;
    profileType: UserProfileType;
    cpfCnpj: string;
    email: string;
    phone: string;
    address: Address;
    institutions: string[];
    photoUrl: string;
}
