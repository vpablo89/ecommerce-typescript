import { IRole } from "@/types";

class Role implements IRole
{
  public id : string;
  public name : string;
  public permissions : string[];
  
  
    constructor(role : IRole)
  {
      this.id = role.id;
      this.name = role.name;
      this.permissions = role.permissions;
  }
}

export default Role;