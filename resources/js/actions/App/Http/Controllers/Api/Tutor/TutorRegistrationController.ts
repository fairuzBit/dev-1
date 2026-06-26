import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::uploadDocument
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:25
* @route '/api/register/tutor/upload-document'
*/
export const uploadDocument = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadDocument.url(options),
    method: 'post',
})

uploadDocument.definition = {
    methods: ["post"],
    url: '/api/register/tutor/upload-document',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::uploadDocument
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:25
* @route '/api/register/tutor/upload-document'
*/
uploadDocument.url = (options?: RouteQueryOptions) => {
    return uploadDocument.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::uploadDocument
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:25
* @route '/api/register/tutor/upload-document'
*/
uploadDocument.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadDocument.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::uploadDocument
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:25
* @route '/api/register/tutor/upload-document'
*/
const uploadDocumentForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadDocument.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::uploadDocument
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:25
* @route '/api/register/tutor/upload-document'
*/
uploadDocumentForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: uploadDocument.url(options),
    method: 'post',
})

uploadDocument.form = uploadDocumentForm

/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::upgradeSemester
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:47
* @route '/api/tutor/upgrade-semester'
*/
export const upgradeSemester = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upgradeSemester.url(options),
    method: 'post',
})

upgradeSemester.definition = {
    methods: ["post"],
    url: '/api/tutor/upgrade-semester',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::upgradeSemester
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:47
* @route '/api/tutor/upgrade-semester'
*/
upgradeSemester.url = (options?: RouteQueryOptions) => {
    return upgradeSemester.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::upgradeSemester
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:47
* @route '/api/tutor/upgrade-semester'
*/
upgradeSemester.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upgradeSemester.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::upgradeSemester
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:47
* @route '/api/tutor/upgrade-semester'
*/
const upgradeSemesterForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upgradeSemester.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Tutor\TutorRegistrationController::upgradeSemester
* @see app/Http/Controllers/Api/Tutor/TutorRegistrationController.php:47
* @route '/api/tutor/upgrade-semester'
*/
upgradeSemesterForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: upgradeSemester.url(options),
    method: 'post',
})

upgradeSemester.form = upgradeSemesterForm

const TutorRegistrationController = { uploadDocument, upgradeSemester }

export default TutorRegistrationController