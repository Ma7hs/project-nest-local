/* eslint-disable prettier/prettier */

//Creating a interface called DataProps
//We can put types in some attributes
//We can restrict more and more the types
// Resume: DataProps is a object with list of reports and contains
// ID: number | source: string | amount : number | created_at : Date | update_at : Date | type : string
// But we can restrict this more and more with only strings that we want like "expense" or "income" 
//Create a ENUM with the types that we want

//If report is a list of reports, we need to declare the TYPES and in the final the ARRAY

interface DataProps{
    report : {
        id: number,
        source: string,
        amount: number,
        create_at: Date,
        update_at: Date,
        type: ReportType
    }[],
}

export enum ReportType{
    EXPENSE = 'expense',
    INCOME = 'income'
}

export const data: DataProps = {   
    report : [
        {
            id: 1,
            source: 'Salary',
            amount: 7600,
            create_at: new Date(),
            update_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 2,
            source: 'Youtube',
            amount: 2500,
            create_at: new Date(),
            update_at: new Date(),
            type: ReportType.INCOME
        },
        {
            id: 3,
            source: 'Games',
            amount: 700,
            create_at: new Date(),
            update_at: new Date(),
            type: ReportType.EXPENSE
        }
    ]
}
