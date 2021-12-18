import { Status } from "../enums";

export interface LogDto {
    createdAt: Date;
    updatedAt: Date;
    id: string;
    status: Status;
    inactivatedAt?: Date;
    inactivationReason?: string;
}