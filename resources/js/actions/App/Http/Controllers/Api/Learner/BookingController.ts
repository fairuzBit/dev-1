import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\Learner\BookingController::index
* @see app/Http/Controllers/Api/Learner/BookingController.php:28
* @route '/api/learner/bookings'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/learner/bookings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::index
* @see app/Http/Controllers/Api/Learner/BookingController.php:28
* @route '/api/learner/bookings'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::index
* @see app/Http/Controllers/Api/Learner/BookingController.php:28
* @route '/api/learner/bookings'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::index
* @see app/Http/Controllers/Api/Learner/BookingController.php:28
* @route '/api/learner/bookings'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::index
* @see app/Http/Controllers/Api/Learner/BookingController.php:28
* @route '/api/learner/bookings'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::index
* @see app/Http/Controllers/Api/Learner/BookingController.php:28
* @route '/api/learner/bookings'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::index
* @see app/Http/Controllers/Api/Learner/BookingController.php:28
* @route '/api/learner/bookings'
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
* @see \App\Http\Controllers\Api\Learner\BookingController::store
* @see app/Http/Controllers/Api/Learner/BookingController.php:40
* @route '/api/learner/bookings'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/learner/bookings',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::store
* @see app/Http/Controllers/Api/Learner/BookingController.php:40
* @route '/api/learner/bookings'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::store
* @see app/Http/Controllers/Api/Learner/BookingController.php:40
* @route '/api/learner/bookings'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::store
* @see app/Http/Controllers/Api/Learner/BookingController.php:40
* @route '/api/learner/bookings'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::store
* @see app/Http/Controllers/Api/Learner/BookingController.php:40
* @route '/api/learner/bookings'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::show
* @see app/Http/Controllers/Api/Learner/BookingController.php:84
* @route '/api/learner/bookings/{id}'
*/
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/learner/bookings/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::show
* @see app/Http/Controllers/Api/Learner/BookingController.php:84
* @route '/api/learner/bookings/{id}'
*/
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::show
* @see app/Http/Controllers/Api/Learner/BookingController.php:84
* @route '/api/learner/bookings/{id}'
*/
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::show
* @see app/Http/Controllers/Api/Learner/BookingController.php:84
* @route '/api/learner/bookings/{id}'
*/
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::show
* @see app/Http/Controllers/Api/Learner/BookingController.php:84
* @route '/api/learner/bookings/{id}'
*/
const showForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::show
* @see app/Http/Controllers/Api/Learner/BookingController.php:84
* @route '/api/learner/bookings/{id}'
*/
showForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::show
* @see app/Http/Controllers/Api/Learner/BookingController.php:84
* @route '/api/learner/bookings/{id}'
*/
showForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::pay
* @see app/Http/Controllers/Api/Learner/BookingController.php:96
* @route '/api/learner/bookings/{id}/pay'
*/
export const pay = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: pay.url(args, options),
    method: 'patch',
})

pay.definition = {
    methods: ["patch"],
    url: '/api/learner/bookings/{id}/pay',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::pay
* @see app/Http/Controllers/Api/Learner/BookingController.php:96
* @route '/api/learner/bookings/{id}/pay'
*/
pay.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return pay.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::pay
* @see app/Http/Controllers/Api/Learner/BookingController.php:96
* @route '/api/learner/bookings/{id}/pay'
*/
pay.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: pay.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::pay
* @see app/Http/Controllers/Api/Learner/BookingController.php:96
* @route '/api/learner/bookings/{id}/pay'
*/
const payForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pay.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::pay
* @see app/Http/Controllers/Api/Learner/BookingController.php:96
* @route '/api/learner/bookings/{id}/pay'
*/
payForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: pay.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

pay.form = payForm

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::simulatePaymentSuccess
* @see app/Http/Controllers/Api/Learner/BookingController.php:115
* @route '/api/learner/bookings/{id}/simulate-payment'
*/
export const simulatePaymentSuccess = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: simulatePaymentSuccess.url(args, options),
    method: 'patch',
})

simulatePaymentSuccess.definition = {
    methods: ["patch"],
    url: '/api/learner/bookings/{id}/simulate-payment',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::simulatePaymentSuccess
* @see app/Http/Controllers/Api/Learner/BookingController.php:115
* @route '/api/learner/bookings/{id}/simulate-payment'
*/
simulatePaymentSuccess.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return simulatePaymentSuccess.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::simulatePaymentSuccess
* @see app/Http/Controllers/Api/Learner/BookingController.php:115
* @route '/api/learner/bookings/{id}/simulate-payment'
*/
simulatePaymentSuccess.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: simulatePaymentSuccess.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::simulatePaymentSuccess
* @see app/Http/Controllers/Api/Learner/BookingController.php:115
* @route '/api/learner/bookings/{id}/simulate-payment'
*/
const simulatePaymentSuccessForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: simulatePaymentSuccess.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::simulatePaymentSuccess
* @see app/Http/Controllers/Api/Learner/BookingController.php:115
* @route '/api/learner/bookings/{id}/simulate-payment'
*/
simulatePaymentSuccessForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: simulatePaymentSuccess.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

simulatePaymentSuccess.form = simulatePaymentSuccessForm

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::submitReview
* @see app/Http/Controllers/Api/Learner/BookingController.php:134
* @route '/api/learner/bookings/{id}/reviews'
*/
export const submitReview = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitReview.url(args, options),
    method: 'post',
})

submitReview.definition = {
    methods: ["post"],
    url: '/api/learner/bookings/{id}/reviews',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::submitReview
* @see app/Http/Controllers/Api/Learner/BookingController.php:134
* @route '/api/learner/bookings/{id}/reviews'
*/
submitReview.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return submitReview.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::submitReview
* @see app/Http/Controllers/Api/Learner/BookingController.php:134
* @route '/api/learner/bookings/{id}/reviews'
*/
submitReview.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: submitReview.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::submitReview
* @see app/Http/Controllers/Api/Learner/BookingController.php:134
* @route '/api/learner/bookings/{id}/reviews'
*/
const submitReviewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitReview.url(args, options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::submitReview
* @see app/Http/Controllers/Api/Learner/BookingController.php:134
* @route '/api/learner/bookings/{id}/reviews'
*/
submitReviewForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: submitReview.url(args, options),
    method: 'post',
})

submitReview.form = submitReviewForm

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::cancel
* @see app/Http/Controllers/Api/Learner/BookingController.php:157
* @route '/api/learner/bookings/{id}/cancel'
*/
export const cancel = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: cancel.url(args, options),
    method: 'patch',
})

cancel.definition = {
    methods: ["patch"],
    url: '/api/learner/bookings/{id}/cancel',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::cancel
* @see app/Http/Controllers/Api/Learner/BookingController.php:157
* @route '/api/learner/bookings/{id}/cancel'
*/
cancel.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return cancel.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::cancel
* @see app/Http/Controllers/Api/Learner/BookingController.php:157
* @route '/api/learner/bookings/{id}/cancel'
*/
cancel.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: cancel.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::cancel
* @see app/Http/Controllers/Api/Learner/BookingController.php:157
* @route '/api/learner/bookings/{id}/cancel'
*/
const cancelForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::cancel
* @see app/Http/Controllers/Api/Learner/BookingController.php:157
* @route '/api/learner/bookings/{id}/cancel'
*/
cancelForm.patch = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: cancel.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

cancel.form = cancelForm

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::schedules
* @see app/Http/Controllers/Api/Learner/BookingController.php:61
* @route '/api/schedules'
*/
export const schedules = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedules.url(options),
    method: 'get',
})

schedules.definition = {
    methods: ["get","head"],
    url: '/api/schedules',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::schedules
* @see app/Http/Controllers/Api/Learner/BookingController.php:61
* @route '/api/schedules'
*/
schedules.url = (options?: RouteQueryOptions) => {
    return schedules.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::schedules
* @see app/Http/Controllers/Api/Learner/BookingController.php:61
* @route '/api/schedules'
*/
schedules.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: schedules.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::schedules
* @see app/Http/Controllers/Api/Learner/BookingController.php:61
* @route '/api/schedules'
*/
schedules.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: schedules.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::schedules
* @see app/Http/Controllers/Api/Learner/BookingController.php:61
* @route '/api/schedules'
*/
const schedulesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedules.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::schedules
* @see app/Http/Controllers/Api/Learner/BookingController.php:61
* @route '/api/schedules'
*/
schedulesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedules.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::schedules
* @see app/Http/Controllers/Api/Learner/BookingController.php:61
* @route '/api/schedules'
*/
schedulesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: schedules.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

schedules.form = schedulesForm

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::history
* @see app/Http/Controllers/Api/Learner/BookingController.php:72
* @route '/api/learner/history'
*/
export const history = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

history.definition = {
    methods: ["get","head"],
    url: '/api/learner/history',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::history
* @see app/Http/Controllers/Api/Learner/BookingController.php:72
* @route '/api/learner/history'
*/
history.url = (options?: RouteQueryOptions) => {
    return history.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::history
* @see app/Http/Controllers/Api/Learner/BookingController.php:72
* @route '/api/learner/history'
*/
history.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::history
* @see app/Http/Controllers/Api/Learner/BookingController.php:72
* @route '/api/learner/history'
*/
history.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: history.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::history
* @see app/Http/Controllers/Api/Learner/BookingController.php:72
* @route '/api/learner/history'
*/
const historyForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::history
* @see app/Http/Controllers/Api/Learner/BookingController.php:72
* @route '/api/learner/history'
*/
historyForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Api\Learner\BookingController::history
* @see app/Http/Controllers/Api/Learner/BookingController.php:72
* @route '/api/learner/history'
*/
historyForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: history.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

history.form = historyForm

const BookingController = { index, store, show, pay, simulatePaymentSuccess, submitReview, cancel, schedules, history }

export default BookingController