<ul class="tt-side-nav">

    <!-- dashboard -->
    <li class="side-nav-item nav-item">
        <a href="{{ auth()->user()->user_type == 'business' ? route('bussiness.dashboard') : route('admin.dashboard') }}"
            class="side-nav-link">
            <span class="tt-nav-link-icon"><i data-feather="pie-chart"></i></span>
            <span class="tt-nav-link-text">{{ localize('Dashboard') }}</span>
        </a>
    </li>


    <!-- customers -->
    @can('users')
        <!-- Users -->
        <li class="side-nav-title side-nav-item nav-item">
            <span class="tt-nav-title-text">{{ localize('Users') }}</span>
        </li>
        <li class="side-nav-item nav-item">
            <a href="{{ route('admin.customers.index') }}" class="side-nav-link">
                <span class="tt-nav-link-icon"> <i data-feather="users"></i></span>
                <span class="tt-nav-link-text">{{ localize('Customers') }}</span>
            </a>
        </li>
    @endcan



    <!-- media manager -->
    @can('media_manager')
        <li class="side-nav-item">
            <a href="{{ route('admin.mediaManager.index') }}" class="side-nav-link">
                <span class="tt-nav-link-icon"> <i data-feather="folder"></i></span>
                <span class="tt-nav-link-text">{{ localize('Media Manager') }}</span>
            </a>
        </li>
    @endcan



    @php
        $business_active_routes = ['admin/events', 'admin/events/category', 'admin/events/coupons'];
    @endphp

    @can('events')
        <li class="side-nav-title side-nav-item nav-item">
            <span class="tt-nav-title-text">{{ localize('Events Management') }}</span>
        </li>
        {{-- Event Managment --}}
        <li class="side-nav-item nav-item {{ areActiveRoutes($business_active_routes, 'tt-menu-item-active') }}">
            <a href="{{ route('admin.events.index') }}" class="side-nav-link">
                <span class="tt-nav-link-icon"> <i data-feather="copy"></i></span>
                <span class="tt-nav-link-text">{{ localize('Events') }}</span>
            </a>
        </li>
    @endcan

    {{-- event categories --}}
    @can('events_categories')
        {{-- Event Categories --}}
        <li class="side-nav-item nav-item {{ areActiveRoutes($business_active_routes, 'tt-menu-item-active') }}">
            <a href="{{ route('admin.events.categories.index') }}" class="side-nav-link">
                <span class="tt-nav-link-icon"> <i data-feather="copy"></i></span>
                <span class="tt-nav-link-text">{{ localize('Events Categories') }}</span>
            </a>
        </li>
    @endcan



    <br><br>



</ul>
