import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { v4 as uuid } from 'uuid'

@Entity('letters')
class Letter{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    sender: string

    @Column()
    message: string

    @CreateDateColumn()
    created_at: Date

}

export { Letter }