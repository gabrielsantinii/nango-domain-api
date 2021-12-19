import firebaseAdmin from "firebase-admin";
import { CreateAuthResult } from "./create-auth.interface";

export class CreateAuth implements CreateAuthResult {
    constructor(private readonly email: string, private readonly password: string) {}

    async perform() {
        const createdAuth = await firebaseAdmin.auth().createUser({ email: this.email, password: this.password });
        if (!createdAuth.uid) {
            throw new Error("uid não foi gerado.");
        }
        return { uid: createdAuth.uid };
    }
}
