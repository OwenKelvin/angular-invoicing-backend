<?php

namespace Okotieno\PermissionsAndRoles\Models;

use App\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class Role extends \Spatie\Permission\Models\Role
{
    public static function scopeStaffs(Builder $query): Builder
    {
        return $query->where('is_staff', true);
    }
}
