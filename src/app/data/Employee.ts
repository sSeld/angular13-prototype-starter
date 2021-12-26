import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Employee {
  @PrimaryColumn()
  id!: string;
  @Column()
  name!: string;
  @Column()
  birthdate!: Date;
}
