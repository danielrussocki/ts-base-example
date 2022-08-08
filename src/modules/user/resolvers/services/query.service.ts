import { AppUserModel } from '@app/repos/project-database'
/* middlewares */
import { comparePasswordMiddleware, tokenSign } from '@app/middlewares/authentication.middleware'
/* interfaces */
import { UserLoginInput } from '../../interfaces/user.interface'

export class QueryService {
  async authenticationLogin({ email, password }: UserLoginInput) {
    const user = await AppUserModel.findOne({
      where: { active: true, email }
    })

    if (!user) throw new Error("User doesn't exists!")
    const validPassword = await comparePasswordMiddleware(password, user.password)

    if (!validPassword) throw new Error('Incorrect Password!')
    /* returns token */
    return { token: `Bearer ${tokenSign({ id: user.id, email: user.email }, process.env.REPO_SECRET_KEY || '')}` }
  }
}
