import { StatusType } from "../types";

export interface LogDto {
    createdAt: Date;
    updatedAt: Date;
    id: string;
    status: StatusType;
    inactivatedAt?: Date;
    inactivationReason?: string;
}