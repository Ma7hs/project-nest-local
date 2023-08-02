/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import {Injectable} from '@nestjs/common'
import { ReportType, data } from './data';
import { ResponseReportDTO } from './dtos/records.dto';

interface ReportDataProps {
  amount: number,
  source: string
}

interface updateDataProps {
  amount?: number,
  source?: string
}


@Injectable()
export class AppService {
  getAllReports(type: ReportType) : ResponseReportDTO[]{
    return data.report.filter(report => report.type === type).map((report) => new ResponseReportDTO(report));
  };

  getReportById(type: ReportType, id: number) : ResponseReportDTO{
    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id == id);

    if (report) {
      return new ResponseReportDTO(report);
    }
  };

  createReport(type: ReportType, {amount, source}: ReportDataProps) : ResponseReportDTO{
    const newReport = {
      id: 3,
      source,
      amount,
      create_at: new Date(),
      update_at: new Date(),
      type: type,
    };

    data.report.push(newReport);
    if(newReport){
      return new ResponseReportDTO(newReport)
    }
  };

  updateReport(type: ReportType, id: number, body: updateDataProps) : ResponseReportDTO{
    const reportToUpdate = data.report
    .filter((report) => report.type === type)
    .find((report) => report.id == id);

  if (reportToUpdate) {
    const findIndex = data.report.findIndex((report) => report.id === reportToUpdate.id);

    data.report[findIndex] = {
      ...data.report[findIndex],
      ...body
    };

    return new ResponseReportDTO(data.report[findIndex])
  }
  }

  deleteReport(id: number){
    const findIndex = data.report.findIndex((report) => report.id === id)

    if(findIndex === -1){
      return false;
    }else{
      data.report.splice(findIndex, 1)
      return 'Data Deleted'
    }
  }
}