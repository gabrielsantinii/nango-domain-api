import { CreateUserDto } from "./create.user.dto";
import { LogDto } from "../../../shared/dtos";

export interface ReadUserDto extends CreateUserDto, LogDto {}
