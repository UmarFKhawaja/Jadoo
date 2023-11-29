import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { Solution } from './Solution';

@ObjectType()
@Entity()
export class User {
  @Field((type) => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field()
  @Column()
  displayName!: string;

  @Field()
  @Column()
  @Index({
    unique: true
  })
  userName!: string;

  @Field()
  @Column()
  @Index({
    unique: true
  })
  emailAddress!: string;

  @Column({
    nullable: true
  })
  saltHash!: string;

  @CreateDateColumn()
  createDate!: Date;

  @UpdateDateColumn()
  updateDate!: Date;

  @Field((type) => [Solution])
  @ManyToMany(() => Solution, (solution: Solution) => solution.users)
  solutions!: Solution[];
}
