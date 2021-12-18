import { CreateAuth } from ".";

async function createFirebaseUserSpy({ email }: { email: string; password: string }) {
    if (!email.includes("@")) {
        throw new Error("E-mail inválido.");
    }
    return { uid: "Hello-uid" };
}

describe("create-auth must create an auth user in firebase and return the created uid", () => {
    it("must create the uid of created auth", async () => {
        const sut = new CreateAuth("gabriel@gmail.com", createFirebaseUserSpy);
        const createdAuth = await sut.perform();
        expect(createdAuth.uid).toBeTruthy();
    });

    it("must throws exception for invalid email", async () => {
        const sut = new CreateAuth("gabrielgmail.com", createFirebaseUserSpy);
        expect(async () => await sut.perform()).rejects.toThrow("E-mail inválido.");
    });
});
