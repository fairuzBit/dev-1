import TutorRegistrationController from './TutorRegistrationController'
import DashboardController from './DashboardController'
import AvailabilityController from './AvailabilityController'
import BookingController from './BookingController'
import ReviewController from './ReviewController'
import NotificationController from './NotificationController'
import ProfileController from './ProfileController'

const Tutor = {
    TutorRegistrationController: Object.assign(TutorRegistrationController, TutorRegistrationController),
    DashboardController: Object.assign(DashboardController, DashboardController),
    AvailabilityController: Object.assign(AvailabilityController, AvailabilityController),
    BookingController: Object.assign(BookingController, BookingController),
    ReviewController: Object.assign(ReviewController, ReviewController),
    NotificationController: Object.assign(NotificationController, NotificationController),
    ProfileController: Object.assign(ProfileController, ProfileController),
}

export default Tutor