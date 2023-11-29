import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Photo } from './Photo';
import { Solution } from './Solution';
import { Task } from './Task';

@ObjectType()
@Entity()
export class Step {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field((type) => Int)
  @Column()
  order!: number;

  @Field()
  @Column()
  description!: string;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

  @Field((type) => Solution)
  @ManyToOne(() => Solution, (solution: Solution) => solution.steps)
  @JoinColumn({
    name: 'solutionID'
  })
  solution!: Solution;

  @Field((type) => Task)
  @OneToMany(() => Task, (task: Task) => task.step)
  tasks!: Task;

  @Field((type) => [Photo])
  @OneToMany(() => Photo, (photo: Photo) => photo.step)
  photos!: Photo[];
}
