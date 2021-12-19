import { CreateAuthResult } from "./create-auth.interface";

class CreateAuthSpy implements CreateAuthResult {
    constructor(private readonly email: string, private readonly password: string) {}

    async perform() {
        if (!this.email.includes("@")) {
            throw new Error("E-mail inválido.");
        }
        return { uid: "Hello-uid" };
    }
}

describe("create-auth must create an auth user in firebase and return the created uid", () => {
    it("must create the uid of created auth", async () => {
        const sut = new CreateAuthSpy("gabriel@gmail.com", "Senha 123");
        const createdAuth = await sut.perform();
        expect(createdAuth.uid).toBeTruthy();
    });

    it("must throws exception for invalid email", async () => {
        const sut = new CreateAuthSpy("gabrielgmail.com", "Senha 123");
        expect(async () => await sut.perform()).rejects.toThrow("E-mail inválido.");
    });
});
