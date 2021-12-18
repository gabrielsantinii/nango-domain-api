import { LogDto } from "../../../shared/dtos";

export interface ClassDto extends LogDto {
    name: string;
    institutionId: string;
    educators: { id: string; name: string }[];
    students: { id: string; name: string }[];
    endsIn?: Date;
}
