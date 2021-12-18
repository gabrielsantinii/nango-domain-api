class CreateAuth {
    perform() {
        return { uid: "12312o412-=sfsdf" }
    }
}

describe("create-auth must create an auth user in firebase and return the created uid", () => {
    it("must create an auth user successfully", async () => {

        const sut = new CreateAuth()
        const createdAuth = sut.perform()
        expect(createdAuth.uid).toBeTruthy()
    })
})