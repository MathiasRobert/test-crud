import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

@Table
export class Product extends Model<Product> {
  @Column
  title: string;

  @Column
  description: string;

  @Column
  price: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
