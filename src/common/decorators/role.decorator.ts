import { SetMetadata } from '@nestjs/common';

export const Role = (role: 'admin' | 'client') => SetMetadata('role', role);
