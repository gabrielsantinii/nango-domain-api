import { CreateUserDto } from "../../data/users/dtos";
import { UserProfileType } from "../../data/users/enums";
import { AddressTestUtils } from "../../shared/__tests__";

export class UsersTestUtils {
    static getValidUser(): CreateUserDto {
        return {
            address: AddressTestUtils.getValidAddress(),
            authId: "any_auth-id",
            cpfCnpj: "12347398955",
            displayName: "Valid User",
            email: "valid@user.com",
            firstName: "Valid",
            institutions: ["any_institution_id"],
            lastName: "User",
            phone: "47988102833",
            photoUrl: "",
            profileType: UserProfileType.student,
        };
    }
}
