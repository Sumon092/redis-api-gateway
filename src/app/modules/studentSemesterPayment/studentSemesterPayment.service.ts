import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../axios';

const getMyPayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await CoreService.get('/student-semester-payments', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const initiatePayment = async (req: Request) => {};
const completePayment = async (req: Request) => {};
export const StudentSemesterPaymentService = {
  getMyPayment,
  initiatePayment,
  completePayment
};
