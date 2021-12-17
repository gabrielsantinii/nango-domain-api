class GetStudentsByInstitutionId {
    async perform(): Promise<{ institutionId: string, id: string }[]> {
        return []
    }
}

describe("get-students-by-institution-id must return an list of students related to institutionId", () => {
    it("should return an empty list once dont have any student related", async () => {
        const sut = new GetStudentsByInstitutionId()
        const studentsList = await sut.perform()
        expect(studentsList.length).toBe(0)
    })
})