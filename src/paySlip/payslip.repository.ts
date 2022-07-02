// NPM modules
import { EntityRepository, getCustomRepository, Repository } from 'typeorm';
import { PaySlip } from './payslip.entity';

@EntityRepository(PaySlip)
export class BoardRepository extends Repository<PaySlip> {
  constructor() {
    super();
  }
  // getPaySlips = async (boardId: number) => {
  //   return await this.createQueryBuilder('board')
  //     .innerJoinAndSelect('board.cards', 'cards')
  //     .where('board.id = :boardId', { boardId })
  //     .getMany();
  // };
}
