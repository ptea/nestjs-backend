import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, unique: true })
  username: string;

  @Column({ length: 100, nullable: true })
  password: string|undefined;

  @Column({ length: 100, nullable: true })
  passwordHash: string|undefined;

  @Column({ length: 500 })
  email: string;
}