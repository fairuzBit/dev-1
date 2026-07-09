import StatsController from './StatsController'
import UserController from './UserController'
import ApplicationController from './ApplicationController'
import ModerationController from './ModerationController'
import PaymentController from './PaymentController'
import BookingController from './BookingController'
import MasterDataController from './MasterDataController'

const Admin = {
    StatsController: Object.assign(StatsController, StatsController),
    UserController: Object.assign(UserController, UserController),
    ApplicationController: Object.assign(ApplicationController, ApplicationController),
    ModerationController: Object.assign(ModerationController, ModerationController),
    PaymentController: Object.assign(PaymentController, PaymentController),
    BookingController: Object.assign(BookingController, BookingController),
    MasterDataController: Object.assign(MasterDataController, MasterDataController),
}

export default Admin