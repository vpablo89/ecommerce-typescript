



export interface Criteria
{
    limit: number
    page: number
}

export interface IUserRepository
{
    paginate(criteria: Criteria): Promise<any>
}