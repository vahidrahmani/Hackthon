import { getCustomRepository } from 'typeorm';
import * as config from 'config';
import { Request, Response, NextFunction } from 'express';
import { BoardRepository } from './payslip.repository';
import ErrorResponse from '../util/errorResponse';
import { payColumn, PaySlip } from './payslip.entity';

export const createPaySlip = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, reqularPay, overTime, vacation, sickDay, period } = req.body;
  try {
    let payslip = new PaySlip();
    payslip = {
      name: name,
      reqularPay: new payColumn(reqularPay.hour, reqularPay.rate),
      overTime: new payColumn(overTime.hour, overTime.rate),
      vacation: new payColumn(vacation.hour, vacation.rate),
      sickDay: new payColumn(sickDay.hour, sickDay.rate),
      period: period,
    };
    let result = await getCustomRepository(BoardRepository).save(payslip);
    res.status(200).json({ data: result });
  } catch (e) {
    return next(new ErrorResponse(500, 'SERVER ERROR', e));
  }
};
export const getAllPaySlip = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let boardRepo = await getCustomRepository(BoardRepository);
    let data = await boardRepo.find();
    res.status(200).json({ data });
  } catch (e) {
    return next(new ErrorResponse(500, 'SERVER ERROR', e));
  }
};
