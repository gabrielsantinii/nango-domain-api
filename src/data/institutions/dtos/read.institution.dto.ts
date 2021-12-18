import { CreateInstitutionDto } from ".";
import { LogDto } from "../../../shared/dtos";

export interface ReadInstitutionDto extends CreateInstitutionDto, LogDto {}
