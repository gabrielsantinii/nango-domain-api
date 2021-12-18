import { CreateUserDto } from "../../data/users/dtos";

export class UsersTestUtils {
    static getValidUser(): CreateUserDto {
        return {
            address: { city: "Balneário", country: "Brasil", postalCode: "88330483", state: "SC", street: "Rua 1001" },
            authId: "any_auth-id",
            cpfCnpj: "12347398955",
            displayName: "Valid User",
            email: "valid@user.com",
            firstName: "Valid",
            institutions: ["any_institution_id"],
            lastName: "User",
            phone: "47988102833",
            photoUrl: "",
            profileType: "student",
        };
    }
}
