import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619229345403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true,

                    },
                    {
                        name:"admin_id",
                        type:"uudi",
                        isNullable:true,
                    },
                    {
                        name: "text",
                        type: "varchar"
                    },
                    {
                        name:"user_id",
                        type:"uuid",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()",
                    }
                ],
                foreignKeys:[
                    {
                        name: "FKUser",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("messages");
    }

}
