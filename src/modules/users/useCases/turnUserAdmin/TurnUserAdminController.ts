import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params;

    try{
      const userAdmEnable = this.turnUserAdminUseCase.execute({user_id});
      return response.status(201).json(userAdmEnable);
    }catch(error){
      return response.status(404).json({
        error: "This user does not can be admin"
      });
    }
  }
}

export { TurnUserAdminController };
