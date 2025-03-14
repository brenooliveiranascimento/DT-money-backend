import { Transaction } from "../../../infra/database/typeorm/dt-money/entity/Transaction";
import { OrderDirection } from "../../../interfaces/order-direction";
import { Paginated } from "../../../interfaces/paginated";

export interface GetTransactionsParams {
  userId: number;
  pagination?: {
    page: number;
    perPage: number;
  };
  filters: {
    from?: Date | undefined;
    to?: Date | undefined;
    type?: number;
    category?: number;
  };
  sort?: {
    id?: OrderDirection;
  };
  searchText?: string;
}

export interface TransactionRepositoryInterface {
  getTransactions(
    params: GetTransactionsParams
  ): Promise<Paginated<Transaction>>;
}
