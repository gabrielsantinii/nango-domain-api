export interface InstitutionById {
    id: string;
    periodEndDate: Date;
    name: string;
}

export interface GetInstitutionByIdResult {
    perform: () => Promise<InstitutionById>
}
