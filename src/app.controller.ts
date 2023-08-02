/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Param, Body, HttpCode, ParseIntPipe, ParseEnumPipe } from '@nestjs/common';
import { ReportType } from './data';
import { AppService } from './app.service'
import { createReportDTO, ResponseReportDTO, updateReportDTO } from './dtos/records.dto'

//Here we define what will be the API URL we want to create
@Controller('reports/:type')
export class AppController {

  constructor(
    private readonly appService: AppService
  ) { }

  //GET Method to get all reports 
  @Get()
  getAllReports(
    @Param('type', new ParseEnumPipe(ReportType))
    type: string
  ): ResponseReportDTO[] {
    const reportType = type === "income" ? ReportType.INCOME : ReportType.EXPENSE
    return this.appService.getAllReports(reportType)
  }

  //Dinamically
  //GET Method to select by ID
  @Get(':id')
  getReportId(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseIntPipe) id: number,
  ) : ResponseReportDTO{
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.getReportById(reportType, id)
  };


  //POST Method to post in the API
  @Post()
  createReport(
    @Body() { amount, source }: createReportDTO,
    @Param('type', new ParseEnumPipe(ReportType)) type: string
  ) : ResponseReportDTO {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;

    return this.appService.createReport(reportType, { amount, source });
  }


  //Dinamically
  @Put(':id')
  updateReport(
    @Body() body: updateReportDTO,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseIntPipe) id: number
  ) : ResponseReportDTO {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    return this.appService.updateReport(reportType, id, body)
  }

  //Dinamically
  @HttpCode(204)
  @Delete(':id')
  deleteReport(
    @Param('id', ParseIntPipe) id: number
  ) {
    return this.appService.deleteReport(id)
  }
}