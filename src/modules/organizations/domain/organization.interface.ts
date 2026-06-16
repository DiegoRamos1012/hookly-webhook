// Decouples the domain from the TypeORM

export interface IOrganization {
  id: string;
  name: string;
  email: string;
  apiKey: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}
