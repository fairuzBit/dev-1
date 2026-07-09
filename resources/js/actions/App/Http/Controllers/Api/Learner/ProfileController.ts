import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::me
* @see app/Http/Controllers/Api/Learner/ProfileController.php:23
* @route '/api/me'
*/
export const me = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

me.definition = {
    methods: ["get","head"],
    url: '/api/me',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::me
* @see app/Http/Controllers/Api/Learner/ProfileController.php:23
* @route '/api/me'
*/
me.url = (options?: RouteQueryOptions) => {
    return me.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::me
* @see app/Http/Controllers/Api/Learner/ProfileController.php:23
* @route '/api/me'
*/
me.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: me.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::me
* @see app/Http/Controllers/Api/Learner/ProfileController.php:23
* @route '/api/me'
*/
me.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: me.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::me
* @see app/Http/Controllers/Api/Learner/ProfileController.php:23
* @route '/api/me'
*/
const meForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::me
* @see app/Http/Controllers/Api/Learner/ProfileController.php:23
* @route '/api/me'
*/
meForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::me
* @see app/Http/Controllers/Api/Learner/ProfileController.php:23
* @route '/api/me'
*/
meForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: me.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

me.form = meForm

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::update
* @see app/Http/Controllers/Api/Learner/ProfileController.php:36
* @route '/api/me'
*/
export const update = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/api/me',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::update
* @see app/Http/Controllers/Api/Learner/ProfileController.php:36
* @route '/api/me'
*/
update.url = (options?: RouteQueryOptions) => {
    return update.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::update
* @see app/Http/Controllers/Api/Learner/ProfileController.php:36
* @route '/api/me'
*/
update.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::update
* @see app/Http/Controllers/Api/Learner/ProfileController.php:36
* @route '/api/me'
*/
const updateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::update
* @see app/Http/Controllers/Api/Learner/ProfileController.php:36
* @route '/api/me'
*/
updateForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::tutorApplicationStatus
* @see app/Http/Controllers/Api/Learner/ProfileController.php:53
* @route '/api/me/tutor-application-status'
*/
export const tutorApplicationStatus = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tutorApplicationStatus.url(options),
    method: 'get',
})

tutorApplicationStatus.definition = {
    methods: ["get","head"],
    url: '/api/me/tutor-application-status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::tutorApplicationStatus
* @see app/Http/Controllers/Api/Learner/ProfileController.php:53
* @route '/api/me/tutor-application-status'
*/
tutorApplicationStatus.url = (options?: RouteQueryOptions) => {
    return tutorApplicationStatus.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::tutorApplicationStatus
* @see app/Http/Controllers/Api/Learner/ProfileController.php:53
* @route '/api/me/tutor-application-status'
*/
tutorApplicationStatus.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: tutorApplicationStatus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::tutorApplicationStatus
* @see app/Http/Controllers/Api/Learner/ProfileController.php:53
* @route '/api/me/tutor-application-status'
*/
tutorApplicationStatus.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: tutorApplicationStatus.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::tutorApplicationStatus
* @see app/Http/Controllers/Api/Learner/ProfileController.php:53
* @route '/api/me/tutor-application-status'
*/
const tutorApplicationStatusForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tutorApplicationStatus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::tutorApplicationStatus
* @see app/Http/Controllers/Api/Learner/ProfileController.php:53
* @route '/api/me/tutor-application-status'
*/
tutorApplicationStatusForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tutorApplicationStatus.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\ProfileController::tutorApplicationStatus
* @see app/Http/Controllers/Api/Learner/ProfileController.php:53
* @route '/api/me/tutor-application-status'
*/
tutorApplicationStatusForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: tutorApplicationStatus.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

tutorApplicationStatus.form = tutorApplicationStatusForm

const ProfileController = { me, update, tutorApplicationStatus }

export default ProfileController