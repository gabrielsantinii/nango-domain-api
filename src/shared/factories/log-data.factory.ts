import { v4 as uuidFactory } from "uuid";
import { LogDto } from "../dtos";
import { Status } from "../enums";


export function logDataFactory(): LogDto {
    return { createdAt: new Date(), id: uuidFactory(), status: Status.active, updatedAt: new Date() };
}
