import { InstitutionsDaoResult } from "../../../data/institutions/daos";
import { CreateInstitutionDto } from "../../../data/institutions/dtos";
import { InstitutionsTestUtils } from "../../__tests__";

const institutionsDaoMock: InstitutionsDaoResult = {
    create: jest.fn(),
    findById: jest.fn(),
};

class CreateInstitution {
    constructor(
        private readonly institutionData: CreateInstitutionDto,
        private readonly institutionsDao: InstitutionsDaoResult
    ) {}

    async perform() {
        return this.institutionsDao.create(this.institutionData);
    }
}

describe("create-institution must save and return the data.", () => {
    it("should create a new institution", async () => {
        const sut = new CreateInstitution(InstitutionsTestUtils.getValidInstitution(), institutionsDaoMock);
        institutionsDaoMock.create = jest.fn().mockReturnValue({ id: "valid generated" });
        const createdInstitution = await sut.perform();
        expect(createdInstitution).toHaveProperty("id");
    });
});
