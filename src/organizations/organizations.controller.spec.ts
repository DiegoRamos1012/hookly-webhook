import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationsController } from './organizations.controller';
import { describe, beforeEach, it } from 'node:test';

describe('OrganizationsController', () => {
  let controller: OrganizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationsController],
    }).compile();

    controller = module.get<OrganizationsController>(OrganizationsController);
  });

  await it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
