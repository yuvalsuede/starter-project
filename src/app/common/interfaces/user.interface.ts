export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}

export interface AppUser {
  uid: string;
  email: string;
  roles: Roles;
}
