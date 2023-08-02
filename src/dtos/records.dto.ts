/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import { Exclude } from 'class-transformer';
import {IsNumber, IsPositive, IsString, IsNotEmpty, IsOptional} from 'class-validator'
import { ReportType } from 'src/data';

export class createReportDTO {
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @IsNotEmpty()
    source: string;
}

export class updateReportDTO {
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    amount: number;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    source: string;
    
}

export class ResponseReportDTO {
    id: number;
    source: string;
    amount: number;
    create_at: Date;

    @Exclude()
    update_at: Date;

    type: ReportType;

    constructor(partial : Partial<ResponseReportDTO>){
        Object.assign(this, partial)
    }
}