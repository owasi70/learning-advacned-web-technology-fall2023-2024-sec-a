
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column()
  fullname: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;
  
  @Column()
  password: string;

  @Column()
  confirmpassword: string;

  @Column()
  company: string;

  @Column()
  mobileNo: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column({ nullable: true })
  profilePicture: string;

  @Column()
  userType: string;

 }
