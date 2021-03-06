import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('letters')
class Letter{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    sender: string

    @Column()
    message: string

    @CreateDateColumn()
    created_at: Date


}

export { Letter }