import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateLetter1615039959412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'letters',
                columns: [
                    {
                        name: 'id',
                        type: 'serial',
                        isPrimary: true
                    },
                    {
                        name: 'sender',
                        type: 'varchar',
                        isNullable:false
                    },
                    {
                        name: 'message',
                        type: 'text',
                        isNullable:false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('letters')
    }

}
