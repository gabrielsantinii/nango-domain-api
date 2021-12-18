import { generate as shortidFactory } from "shortid";
import { AuthAdmin, CreateUserType } from "../interfaces";

class CreateAuth {
    constructor(private readonly email: string, private readonly createFirebaseUser: CreateUserType) {}
    async perform() {
        const createdAuth = await this.createFirebaseUser({ email: this.email, password: shortidFactory() });
        return { uid: createdAuth.uid };
    }
}

async function createFirebaseUserSpy({}: { email: string; password: string }) {
    return { uid: 'Hello-uid' }
}

describe("create-auth must create an auth user in firebase and return the created uid", () => {
    it("must create the uid of created auth", async () => {
        
        const sut = new CreateAuth("gabriel@gmail.com", createFirebaseUserSpy);
        const createdAuth = await sut.perform();
        expect(createdAuth.uid).toBeTruthy();
    });
});
