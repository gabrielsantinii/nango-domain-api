import { ActivityDto } from "../dtos";

export interface ActivitiesDaoResult {
    findByInstitutionId: (institutionId: string) => Promise<ActivityDto[]>;
}
