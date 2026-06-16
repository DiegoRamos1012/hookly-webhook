import { Organization } from './organization.entity';

// This interface is decoupled from TypeORM.

export interface IOrganizationRepository {
  findById(id: string): Promise<Organization | null>;
  findByEmail(email: string): Promise<Organization | null>;
  findByApiKey(apiKey: string): Promise<Organization | null>;
  save(organization: Organization): Promise<Organization>;
}
