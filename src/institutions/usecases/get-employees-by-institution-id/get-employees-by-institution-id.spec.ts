class GetEmployeesByInstitutionId {
    async perform() {
        return [];
    }
}

describe("get-employees-by-institution-id needs to return a list of employees related to the institution", () => {
    it("should return an empty list of employees", async () => {
        const sut = new GetEmployeesByInstitutionId();
        const employees = await sut.perform();
        expect(employees.length).toBe(0);
    });
});
