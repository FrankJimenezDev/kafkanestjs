import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users", { schema: "usersDB" })
export class User {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "nombre", length: 100 })
    nombre: string;

    @Column("varchar", { name: "apellido", length: 100 })
    apellido: string

    @CreateDateColumn({ name: 'created_at', nullable: true })
    createdAt: Date = new Date();

    @UpdateDateColumn({ name: 'updated_at', nullable: true })
    updatedAt: Date = new Date();
}
