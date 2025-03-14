import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { TransactionType } from "./Type";
import { Category } from "./Category";
import { User } from "./User";

@Entity("transactions")
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "type_id", type: "int", nullable: false })
  typeId: number;

  @Column({ name: "category_id", type: "int", nullable: false })
  categoryId: number;

  @Column({ name: "value", type: "int", nullable: false })
  value: number;

  @CreateDateColumn({
    name: "created_at",
    type: "datetime",
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: "updated_at",
    type: "datetime",
    nullable: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({ name: "deleted_at", type: "datetime", nullable: true })
  deletedAt: Date | null;

  @ManyToOne(
    () => TransactionType,
    (transactionType) => transactionType.transactions
  )
  @JoinColumn({ name: "type_id", referencedColumnName: "id" })
  type?: TransactionType;

  @ManyToOne(() => User, (user) => user.transactions)
  @JoinColumn({ name: "type_id", referencedColumnName: "id" })
  user?: TransactionType;

  @ManyToOne(() => Category, (category) => category.transactions)
  @JoinColumn({ name: "category_id", referencedColumnName: "id" })
  category?: Category;
}
