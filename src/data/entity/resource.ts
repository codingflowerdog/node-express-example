import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from 'typeorm';

/**
 * 리소스 엔티티
 */
@Entity("resource")
export class Resource {
    @PrimaryGeneratedColumn({name: "id", type: "int"})
    id: number;

    @Column({name: "name", type: "varchar"})
    name: string;

    @Column({name: "is_used", type: "boolean"})
    isUsed: boolean;

    @CreateDateColumn({name: "created_date", type: "datetime"})
    createdDate: Date;

}