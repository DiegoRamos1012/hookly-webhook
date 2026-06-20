import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../../common/base-entity/base.entity';

@Entity('organizations')
export class Organization extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'password_hash' })
  passwordHash: string;

  @Column({ name: 'api_key', unique: true })
  apiKey: string;

  @Column({ default: true })
  active: boolean;
}
