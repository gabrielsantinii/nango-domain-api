class GetClassesByInstitutionId {

    async perform(): Promise<{ id: string, institutionId: string }[]> {
        return []
    }
}

describe("get-classes-by-institution-id needs to return a list of classes related to institutionId", () => {
    it("should return an empty list of classes once the institution does not have any class configured", async () => {
        const sut = new GetClassesByInstitutionId()
        const classes = await sut.perform();
        expect(classes.length).toBe(0);
    });
});
