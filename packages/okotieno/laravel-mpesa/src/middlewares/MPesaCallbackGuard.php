<?php

namespace Okotieno\MPesa\Middlewares;

use Closure;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;

class MPesaCallbackGuard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}
