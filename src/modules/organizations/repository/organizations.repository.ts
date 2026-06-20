// organization.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from '../domain/organization.entity';
import { IOrganizationRepository } from '../domain/organization.repository,interface';

@Injectable()
export class OrganizationRepository implements IOrganizationRepository {
  constructor(
    @InjectRepository(Organization)
    private readonly repo: Repository<Organization>,
  ) {}

  async findById(id: string): Promise<Organization | null> {
    return this.repo.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<Organization | null> {
    return this.repo.findOne({ where: { email } });
  }

  async findByApiKey(apiKey: string): Promise<Organization | null> {
    return this.repo.findOne({ where: { apiKey } });
  }

  async save(organization: Organization): Promise<Organization> {
    return this.repo.save(organization);
  }
}
