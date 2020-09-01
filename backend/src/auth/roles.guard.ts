import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userService: UsersService,
  ) {}
  async canActivate(context: ExecutionContext) {
    const roles = this.reflector.get<string[]>('roles', context.getClass());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = await this.userService.findOneWithRoles(request.user.id);
    if (!user || !user.roles) {
      return false;
    }
    return matchRoles(
      roles,
      user.roles.map((v) => v.name),
    );
  }
}

const matchRoles = (allowedRoles: string[], userRoles: string[]): boolean => {
  return allowedRoles.every((v) => userRoles.some((vv) => v === vv));
};
