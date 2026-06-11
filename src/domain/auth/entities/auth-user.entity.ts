export type AuthUserRole = 'customer' | 'admin';

type AuthUserProps = {
  displayName: string;
  email: string;
  id: string;
  roles: AuthUserRole[];
};

export class AuthUser {
  readonly displayName: string;

  readonly email: string;

  readonly id: string;

  readonly roles: AuthUserRole[];

  constructor(props: AuthUserProps) {
    this.displayName = props.displayName;
    this.email = props.email;
    this.id = props.id;
    this.roles = [...props.roles];
  }
}
