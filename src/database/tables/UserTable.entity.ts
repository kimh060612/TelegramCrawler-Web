import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BeforeInsert
} from 'typeorm';
import { hash, genSalt }  from 'bcrypt';

@Entity({ name: 'User' })
export class UserEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    uuid!: string;

    @Column({
        type: 'varchar',
        unique: true
    })
    email!: string;

    @Column({
        type: 'varchar'
    })
    password!: string;

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        const salt = await genSalt();
        this.password = await hash(this.password, salt);
    }

}