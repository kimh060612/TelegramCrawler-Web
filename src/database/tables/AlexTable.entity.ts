import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name: 'channelAlexYong' })
export class AlexTableEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    channel_id!: string;

    @Column({
        type: 'varchar'
    })
    channel_name!: string;

    @Column({
        type: 'varchar',
        length: 10
    })
    channel_status!: string;

}