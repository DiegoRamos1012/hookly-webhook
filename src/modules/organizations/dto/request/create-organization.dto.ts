import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 128)
  password: string;
}
