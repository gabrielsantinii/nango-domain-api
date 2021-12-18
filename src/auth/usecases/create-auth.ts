import { generate as shortidFactory } from "shortid";
import { CreateAuthUserType } from "../interfaces";
import { CreateAuthResult } from "./create-auth.interface";

export class CreateAuth implements CreateAuthResult {
    constructor(private readonly email: string, private readonly createFirebaseUser: CreateAuthUserType) {}
    
    async perform() {
        const createdAuth = await this.createFirebaseUser({ email: this.email, password: shortidFactory() });
        if (!createdAuth.uid) {
            throw new Error("uid não foi gerado.");
        }
        return { uid: createdAuth.uid };
    }
}
