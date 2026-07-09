import TutorDiscoveryController from './TutorDiscoveryController'
import ProfileController from './ProfileController'
import DashboardController from './DashboardController'
import BookingController from './BookingController'
import NotificationController from './NotificationController'

const Learner = {
    TutorDiscoveryController: Object.assign(TutorDiscoveryController, TutorDiscoveryController),
    ProfileController: Object.assign(ProfileController, ProfileController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    BookingController: Object.assign(BookingController, BookingController),
    NotificationController: Object.assign(NotificationController, NotificationController),
}

export default Learner