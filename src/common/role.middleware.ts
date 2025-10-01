import { Injectable, NestMiddleware, ForbiddenException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RoleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const role = req.headers['x-role'];

    if (req.path.startsWith('/admin')) {
      if (role !== 'admin') {
        throw new ForbiddenException('Access denied: Admins only');
      }
    }

    if (req.path.startsWith('/reservations/my')) {
      if (role !== 'client' && role !== 'admin') {
        throw new ForbiddenException('Access denied: Clients only');
      }
    }

    next();
  }
}
