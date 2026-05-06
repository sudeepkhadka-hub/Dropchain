import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class FileDrop {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  filename: string;

  @Column()
  s3Url: string;

  @Column({ nullable: true })
  password: string;

  @Column({ default: 1 })
  maxViews: number;

  @Column({ default: 0 })
  currentViews: number;

  @Column()
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
