import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::reviews
* @see app/Http/Controllers/Api/Admin/ModerationController.php:21
* @route '/api/admin/moderation/reviews'
*/
export const reviews = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reviews.url(options),
    method: 'get',
})

reviews.definition = {
    methods: ["get","head"],
    url: '/api/admin/moderation/reviews',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::reviews
* @see app/Http/Controllers/Api/Admin/ModerationController.php:21
* @route '/api/admin/moderation/reviews'
*/
reviews.url = (options?: RouteQueryOptions) => {
    return reviews.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::reviews
* @see app/Http/Controllers/Api/Admin/ModerationController.php:21
* @route '/api/admin/moderation/reviews'
*/
reviews.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: reviews.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::reviews
* @see app/Http/Controllers/Api/Admin/ModerationController.php:21
* @route '/api/admin/moderation/reviews'
*/
reviews.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: reviews.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::reviews
* @see app/Http/Controllers/Api/Admin/ModerationController.php:21
* @route '/api/admin/moderation/reviews'
*/
const reviewsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reviews.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::reviews
* @see app/Http/Controllers/Api/Admin/ModerationController.php:21
* @route '/api/admin/moderation/reviews'
*/
reviewsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reviews.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::reviews
* @see app/Http/Controllers/Api/Admin/ModerationController.php:21
* @route '/api/admin/moderation/reviews'
*/
reviewsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: reviews.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

reviews.form = reviewsForm

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::destroyReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:52
* @route '/api/admin/moderation/reviews/{id}'
*/
export const destroyReview = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyReview.url(args, options),
    method: 'delete',
})

destroyReview.definition = {
    methods: ["delete"],
    url: '/api/admin/moderation/reviews/{id}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::destroyReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:52
* @route '/api/admin/moderation/reviews/{id}'
*/
destroyReview.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return destroyReview.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::destroyReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:52
* @route '/api/admin/moderation/reviews/{id}'
*/
destroyReview.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyReview.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::destroyReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:52
* @route '/api/admin/moderation/reviews/{id}'
*/
const destroyReviewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyReview.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::destroyReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:52
* @route '/api/admin/moderation/reviews/{id}'
*/
destroyReviewForm.delete = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyReview.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyReview.form = destroyReviewForm

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::processReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:82
* @route '/api/admin/moderation/reviews/{id}/process'
*/
export const processReview = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: processReview.url(args, options),
    method: 'patch',
})

processReview.definition = {
    methods: ["patch"],
    url: '/api/admin/moderation/reviews/{id}/process',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::processReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:82
* @route '/api/admin/moderation/reviews/{id}/process'
*/
processReview.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return processReview.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::processReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:82
* @route '/api/admin/moderation/reviews/{id}/process'
*/
processReview.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: processReview.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::processReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:82
* @route '/api/admin/moderation/reviews/{id}/process'
*/
const processReviewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processReview.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::processReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:82
* @route '/api/admin/moderation/reviews/{id}/process'
*/
processReviewForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: processReview.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

processReview.form = processReviewForm

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::resolveReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:93
* @route '/api/admin/moderation/reviews/{id}/resolve'
*/
export const resolveReview = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: resolveReview.url(args, options),
    method: 'patch',
})

resolveReview.definition = {
    methods: ["patch"],
    url: '/api/admin/moderation/reviews/{id}/resolve',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::resolveReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:93
* @route '/api/admin/moderation/reviews/{id}/resolve'
*/
resolveReview.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return resolveReview.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::resolveReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:93
* @route '/api/admin/moderation/reviews/{id}/resolve'
*/
resolveReview.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: resolveReview.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::resolveReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:93
* @route '/api/admin/moderation/reviews/{id}/resolve'
*/
const resolveReviewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resolveReview.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::resolveReview
* @see app/Http/Controllers/Api/Admin/ModerationController.php:93
* @route '/api/admin/moderation/reviews/{id}/resolve'
*/
resolveReviewForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: resolveReview.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

resolveReview.form = resolveReviewForm

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::logs
* @see app/Http/Controllers/Api/Admin/ModerationController.php:63
* @route '/api/admin/moderation/logs'
*/
export const logs = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})

logs.definition = {
    methods: ["get","head"],
    url: '/api/admin/moderation/logs',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::logs
* @see app/Http/Controllers/Api/Admin/ModerationController.php:63
* @route '/api/admin/moderation/logs'
*/
logs.url = (options?: RouteQueryOptions) => {
    return logs.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::logs
* @see app/Http/Controllers/Api/Admin/ModerationController.php:63
* @route '/api/admin/moderation/logs'
*/
logs.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: logs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::logs
* @see app/Http/Controllers/Api/Admin/ModerationController.php:63
* @route '/api/admin/moderation/logs'
*/
logs.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: logs.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::logs
* @see app/Http/Controllers/Api/Admin/ModerationController.php:63
* @route '/api/admin/moderation/logs'
*/
const logsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::logs
* @see app/Http/Controllers/Api/Admin/ModerationController.php:63
* @route '/api/admin/moderation/logs'
*/
logsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\ModerationController::logs
* @see app/Http/Controllers/Api/Admin/ModerationController.php:63
* @route '/api/admin/moderation/logs'
*/
logsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: logs.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

logs.form = logsForm

const ModerationController = { reviews, destroyReview, processReview, resolveReview, logs }

export default ModerationController