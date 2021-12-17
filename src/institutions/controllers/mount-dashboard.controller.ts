import { Request, Response } from "express";
import {
    ActivitiesProgress,
    InstitutionById,
    RemainingDaysByInstitution,
    StudentByInstitutionId,
    ClassByInstitutionId,
    EmployeeByInstitutionId,
} from "../interfaces";
import {
    GetActivitiesByInstitutionId,
    GetActivitiesProgress,
    GetPeriodRemainingDays,
    GetStudentsByInstitutionId,
    GetClassesByInstitutionId,
    GetEmployeesByInstitutionId,
} from "../usecases";
export class MountDashboardController {
    private readonly errors: string[] = [];

    perform = async (request: Request, response: Response) => {
        const institution = request.body.institution as InstitutionById;
        const activitiesProgress = await this.performGetActivitiesProgress(institution.id);
        const remainingDays = this.performGetPeriodRemainingDays(institution);
        const students = await this.performGetStudentsByInstitutionId(institution.id);
        const classes = await this.performGetClassesByInstitutionId(institution.id);
        const employees = await this.performGetEmployeesByInstitutionId(institution.id);
        this.errors.length ? (response.statusCode = 206) : (response.statusCode = 200);

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

    private performGetActivitiesProgress = async (institutionId: string): Promise<ActivitiesProgress> => {
        const getActivitiesByInstitutionId = new GetActivitiesByInstitutionId(institutionId);
        const getActivitiesProgress = new GetActivitiesProgress(getActivitiesByInstitutionId);
        const activitiesProgress = await getActivitiesProgress.perform();
        return activitiesProgress;
    };

    private performGetPeriodRemainingDays = (institution: InstitutionById): RemainingDaysByInstitution => {
        try {
            const getPeriodRemainingDays = new GetPeriodRemainingDays(institution);
            const remainingDaysResult = getPeriodRemainingDays.perform();
            return remainingDaysResult;
        } catch (err: any) {
            this.errors.push(err.message);
            return { remainingDays: 0 };
        }
    };

    private performGetStudentsByInstitutionId = async (institutionId: string): Promise<StudentByInstitutionId[]> => {
        const getStudentsByInstitutionId = new GetStudentsByInstitutionId(institutionId);
        const students = await getStudentsByInstitutionId.perform();
        return students;
    };

    private performGetClassesByInstitutionId = async (institutionId: string): Promise<ClassByInstitutionId[]> => {
        const getClassesByInstitutionId = new GetClassesByInstitutionId(institutionId);
        const classes = await getClassesByInstitutionId.perform();
        return classes;
    };

    private performGetEmployeesByInstitutionId = async (institutionId: string): Promise<EmployeeByInstitutionId[]> => {
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
