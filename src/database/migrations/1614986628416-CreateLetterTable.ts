import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLetterTable1614986628416 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        new Table({
            name: 'letters',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'sender',
                    type: 'string',
                },
                {
                    name: 'message',
                    type: 'text'
                },
                {
                    name: 'created_at',
                    type: 'date',
                    default: 'now()'
                }
            ]
        })
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('letters')
    }

}
