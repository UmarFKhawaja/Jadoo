import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateSchema1701237528171 implements MigrationInterface {
    name = 'CreateSchema1701237528171'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`displayName\` varchar(255) NOT NULL, \`userName\` varchar(255) NOT NULL, \`emailAddress\` varchar(255) NOT NULL, \`saltHash\` varchar(255) NULL, \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_da5934070b5f2726ebfd3122c8\` (\`userName\`), UNIQUE INDEX \`IDX_eea9ba2f6e1bb8cb89c4e672f6\` (\`emailAddress\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`solution\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`solution_user\` (\`solutionID\` varchar(36) NOT NULL, \`userID\` varchar(36) NOT NULL, INDEX \`IDX_3eed723f746ad462fdc857cd24\` (\`solutionID\`), INDEX \`IDX_c1ced2eb2b7af3cccf1c027b5b\` (\`userID\`), PRIMARY KEY (\`solutionID\`, \`userID\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`solution_user\` ADD CONSTRAINT \`FK_3eed723f746ad462fdc857cd248\` FOREIGN KEY (\`solutionID\`) REFERENCES \`solution\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`solution_user\` ADD CONSTRAINT \`FK_c1ced2eb2b7af3cccf1c027b5be\` FOREIGN KEY (\`userID\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`solution_user\` DROP FOREIGN KEY \`FK_c1ced2eb2b7af3cccf1c027b5be\``);
        await queryRunner.query(`ALTER TABLE \`solution_user\` DROP FOREIGN KEY \`FK_3eed723f746ad462fdc857cd248\``);
        await queryRunner.query(`DROP INDEX \`IDX_c1ced2eb2b7af3cccf1c027b5b\` ON \`solution_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_3eed723f746ad462fdc857cd24\` ON \`solution_user\``);
        await queryRunner.query(`DROP TABLE \`solution_user\``);
        await queryRunner.query(`DROP TABLE \`solution\``);
        await queryRunner.query(`DROP INDEX \`IDX_eea9ba2f6e1bb8cb89c4e672f6\` ON \`user\``);
        await queryRunner.query(`DROP INDEX \`IDX_da5934070b5f2726ebfd3122c8\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
