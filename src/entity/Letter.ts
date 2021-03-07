import { Column,CreateDateColumn,Entity,PrimaryGeneratedColumn } from "typeorm"


@Entity('letters')
class Letter{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("varchar")
    sender: string

    @Column("varchar")
    message: string

    @CreateDateColumn()
    created_at: Date

}

export { Letter }