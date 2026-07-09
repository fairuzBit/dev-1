import Auth from './Auth'
import Tutor from './Tutor'
import MasterDataController from './MasterDataController'
import Learner from './Learner'
import Admin from './Admin'

const Api = {
    Auth: Object.assign(Auth, Auth),
    Tutor: Object.assign(Tutor, Tutor),
    MasterDataController: Object.assign(MasterDataController, MasterDataController),
    Learner: Object.assign(Learner, Learner),
    Admin: Object.assign(Admin, Admin),
}

export default Api