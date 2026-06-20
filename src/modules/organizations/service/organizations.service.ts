import { Inject, Injectable } from '@nestjs/common';
import { IOrganizationRepository } from '../domain/organization.repository,interface';

@Injectable()
export class OrganizationService {
  constructor(
    @Inject('IOrganizationRepository')
    private readonly organizationRepository: IOrganizationRepository,
  ) {}

  async register() {
  }
}
