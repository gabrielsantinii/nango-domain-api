import { Date } from "mongoose";
import { LogDto } from "../../../shared/dtos";

export interface ActivityDto extends LogDto {
    trailId: string;
    classId: string;
    institutionId: string;
    endsIn: Date;
    startsIn: Date;
    questions: [];
}
