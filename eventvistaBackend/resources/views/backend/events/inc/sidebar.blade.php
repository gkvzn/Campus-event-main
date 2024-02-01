@php
    $business_active_routes = ['business/events', 'business/events/category', 'business/events/coupons'];
@endphp

@can('events')
    <li class="side-nav-title side-nav-item nav-item">
        <span class="tt-nav-title-text">{{ localize('Events Management') }}</span>
    </li>
    {{-- Event Managment --}}
    <li class="side-nav-item nav-item {{ areActiveRoutes($business_active_routes, 'tt-menu-item-active') }}">
        <a href="{{ route('business.events.index') }}" class="side-nav-link">
            <span class="tt-nav-link-icon"> <i data-feather="copy"></i></span>
            <span class="tt-nav-link-text">{{ localize('Events') }}</span>
        </a>
    </li>
@endcan

{{-- event categories --}}
@can('events_categories')
    {{-- Event Categories --}}
    <li class="side-nav-item nav-item {{ areActiveRoutes($business_active_routes, 'tt-menu-item-active') }}">
        <a href="{{ route('business.events.categories.index') }}" class="side-nav-link">
            <span class="tt-nav-link-icon"> <i data-feather="copy"></i></span>
            <span class="tt-nav-link-text">{{ localize('Events Categories') }}</span>
        </a>
    </li>
@endcan

@can('events_spaces_coupon')
    <li class="side-nav-item nav-item {{ areActiveRoutes($business_active_routes, 'tt-menu-item-active') }}">
        <a href="{{ route('business.events.coupons.index') }}" class="side-nav-link">
            <span class="tt-nav-link-icon"> <i data-feather="copy"></i></span>
            <span class="tt-nav-link-text">{{ localize('Events Coupon') }}</span>
        </a>
    </li>
@endcan

<br><br>
