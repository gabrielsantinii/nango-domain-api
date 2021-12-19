export interface CreateAuthResult {
    perform: () => Promise<{uid: string}>;
}