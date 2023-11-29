import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { User } from './User';

@ObjectType()
@Entity()
export class Solution {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  description!: string;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

  @Field((type) => [User])
  @ManyToMany(() => User, (user: User) => user.solutions)
  @JoinTable({
    name: 'solution_user',
    joinColumn: {
      name: 'solutionID'
    },
    inverseJoinColumn: {
      name: 'userID'
    }
  })
  users!: User[];
}
