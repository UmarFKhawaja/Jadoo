import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Step } from './Step';
import { User } from './User';
import { Photo } from './Photo';

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

  @Field((type) => [Step])
  @OneToMany(() => Step, (step: Step) => step.solution)
  steps!: Step[];

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

  @Field((type) => [Photo])
  @OneToMany(() => Photo, (photo: Photo) => photo.solution)
  photos!: Photo[];
}
