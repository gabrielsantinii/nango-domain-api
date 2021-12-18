import { Address } from "../interfaces";

export class AddressTestUtils {
    static getValidAddress(): Address {
        return { city: "Balneário", country: "Brasil", postalCode: "88330483", state: "SC", street: "Rua 1001" };
    }
}
