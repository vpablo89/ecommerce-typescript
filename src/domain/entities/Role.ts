import { RoleNames } from "@/enums";
import { IRole } from "@/types";

class Role implements IRole
{
  public id : string;
  public name : RoleNames;
  public permissions : string[];
  
  
    constructor(role : IRole)
  {
      this.id = role.id;
      this.name = role.name;
      this.permissions = role.permissions;
  }
}

export default Role;