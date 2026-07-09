import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::index
* @see app/Http/Controllers/Api/Admin/PaymentController.php:21
* @route '/api/admin/payments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/admin/payments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::index
* @see app/Http/Controllers/Api/Admin/PaymentController.php:21
* @route '/api/admin/payments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::index
* @see app/Http/Controllers/Api/Admin/PaymentController.php:21
* @route '/api/admin/payments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::index
* @see app/Http/Controllers/Api/Admin/PaymentController.php:21
* @route '/api/admin/payments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::index
* @see app/Http/Controllers/Api/Admin/PaymentController.php:21
* @route '/api/admin/payments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::index
* @see app/Http/Controllers/Api/Admin/PaymentController.php:21
* @route '/api/admin/payments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::index
* @see app/Http/Controllers/Api/Admin/PaymentController.php:21
* @route '/api/admin/payments'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::approve
* @see app/Http/Controllers/Api/Admin/PaymentController.php:47
* @route '/api/admin/payments/{id}/approve'
*/
export const approve = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve.url(args, options),
    method: 'patch',
})

approve.definition = {
    methods: ["patch"],
    url: '/api/admin/payments/{id}/approve',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::approve
* @see app/Http/Controllers/Api/Admin/PaymentController.php:47
* @route '/api/admin/payments/{id}/approve'
*/
approve.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return approve.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::approve
* @see app/Http/Controllers/Api/Admin/PaymentController.php:47
* @route '/api/admin/payments/{id}/approve'
*/
approve.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::approve
* @see app/Http/Controllers/Api/Admin/PaymentController.php:47
* @route '/api/admin/payments/{id}/approve'
*/
const approveForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Admin\PaymentController::approve
* @see app/Http/Controllers/Api/Admin/PaymentController.php:47
* @route '/api/admin/payments/{id}/approve'
*/
approveForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

approve.form = approveForm

const PaymentController = { index, approve }

export default PaymentController