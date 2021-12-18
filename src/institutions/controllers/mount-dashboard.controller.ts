import { Request, Response } from "express";

import { GetActivitiesByInstitutionId } from "../usecases/get-activities-by-institution-id";
import { ActivitiesProgress, GetActivitiesProgress } from "../usecases/get-activities-progress";
import { GetPeriodRemainingDays, RemainingDaysByInstitution } from "../usecases/get-period-remaining-days";
import { ClassByInstitutionId, GetClassesByInstitutionId } from "../usecases/get-classes-by-institution-id";
import { GetStudentsByInstitutionId, StudentByInstitutionId } from "../usecases/get-students-by-institution-id";
import { EmployeeByInstitutionId, GetEmployeesByInstitutionId } from "../usecases/get-employees-by-institution-id";
import { InstitutionDto } from "../../data/institutions/dtos";

export class MountDashboardController {
    private readonly errors: string[] = [];

    perform = async (request: Request, response: Response) => {
        const institution = request.body.institution as InstitutionDto;
        const activitiesProgress = await this.getActivitiesProgress(institution.id);
        const remainingDays = this.getPeriodRemainingDays(institution.periodEndDate);
        const students = await this.getStudentsByInstitutionId(institution.id);
        const classes = await this.getClassesByInstitutionId(institution.id);
        const employees = await this.getEmployeesByInstitutionId(institution.id);
        response.statusCode = this.errors.length ? 206 : 200;

        return response.json({
            errors: this.errors,
            data: {
                students: students,
                classes: classes,
                employees: employees,
                messages: [],
                progress: { period: { remainingDays }, activities: activitiesProgress },
            },
        });
    };

    private getActivitiesProgress = async (institutionId: string): Promise<ActivitiesProgress> => {
        const getActivitiesByInstitutionId = new GetActivitiesByInstitutionId(institutionId);
        const getActivitiesProgress = new GetActivitiesProgress(getActivitiesByInstitutionId);
        const activitiesProgress = await getActivitiesProgress.perform();
        return activitiesProgress;
    };

    private getPeriodRemainingDays = (periodEndDate: Date): RemainingDaysByInstitution => {
        try {
            const getPeriodRemainingDays = new GetPeriodRemainingDays(periodEndDate);
            const remainingDaysResult = getPeriodRemainingDays.perform();
            return remainingDaysResult;
        } catch (err: any) {
            this.errors.push(err.message);
            return { remainingDays: 0 };
        }
    };

    private getStudentsByInstitutionId = async (institutionId: string): Promise<StudentByInstitutionId[]> => {
        const getStudentsByInstitutionId = new GetStudentsByInstitutionId(institutionId);
        const students = await getStudentsByInstitutionId.perform();
        return students;
    };

    private getClassesByInstitutionId = async (institutionId: string): Promise<ClassByInstitutionId[]> => {
        const getClassesByInstitutionId = new GetClassesByInstitutionId(institutionId);
        const classes = await getClassesByInstitutionId.perform();
        return classes;
    };

    private getEmployeesByInstitutionId = async (institutionId: string): Promise<EmployeeByInstitutionId[]> => {
        try {
            const getEmployeesByInstitutionId = new GetEmployeesByInstitutionId(institutionId);
            const employees = await getEmployeesByInstitutionId.perform();
            return employees;
        } catch (err: any) {
            this.errors.push(err.message);
            return [];
        }
    };
}
