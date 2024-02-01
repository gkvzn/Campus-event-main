<aside class="tt-sidebar bg-light-subtle" id="sidebar">
    <div class="tt-brand d-flex justify-content-center">


        <a href="{{ route('admin.dashboard') }}" class="tt-brand-link">
            <img src="{{ uploadedAsset(getSetting('admin_panel_logo')) }}" class="tt-brand-logo ms-2 sidebar-admin-image"
                alt="logo" style="height: 50px" />
        </a>
        <a href="javascript:void(0);" class="tt-toggle-sidebar">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 18"
                    fill="none">
                    <g clip-path="url(#clip0_1359_11605)">
                        <path
                            d="M16.8786 15.7254H1.18838C0.569629 15.7254 0.0668945 16.2281 0.0668945 16.8469C0.0668945 17.4656 0.569629 17.9684 1.18838 17.9684H16.8786C17.4974 17.9684 18.0001 17.4656 18.0001 16.8469C18.0001 16.2281 17.4974 15.7254 16.8786 15.7254Z"
                            fill="white" />
                        <path
                            d="M16.8786 0.0351562H1.18838C0.569629 0.0351562 0.0668945 0.534375 0.0668945 1.15312C0.0668945 1.77188 0.569629 2.27461 1.18838 2.27461H16.8786C17.4974 2.27461 18.0001 1.77188 18.0001 1.15312C18.0001 0.534375 17.4974 0.0351562 16.8786 0.0351562Z"
                            fill="white" />
                        <path
                            d="M16.8784 5.30157H10.828C10.2093 5.30157 9.70654 5.80431 9.70654 6.42306C9.70654 7.04181 10.2093 7.54454 10.828 7.54454H16.8819C17.5007 7.54454 18.0034 7.04181 18.0034 6.42306C17.9999 5.80431 17.4972 5.30157 16.8784 5.30157Z"
                            fill="white" />
                        <path
                            d="M16.8784 10.4555H10.828C10.2093 10.4555 9.70654 10.9582 9.70654 11.577C9.70654 12.1957 10.2093 12.6984 10.828 12.6984H16.8819C17.5007 12.6984 18.0034 12.1957 18.0034 11.577C17.9999 10.9582 17.4972 10.4555 16.8784 10.4555Z"
                            fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M4.16954 5.61798L0.51681 7.95587C-0.168736 8.39533 -0.172252 9.39025 0.506264 9.83673L4.159 12.2344C4.90431 12.7231 5.89572 12.1887 5.89572 11.2957V6.56369C5.89572 5.67775 4.91837 5.14337 4.16954 5.61798Z"
                            fill="white" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1359_11605">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg></span>
        </a>
    </div>

    <div class="tt-sidebar-nav pb-9 pt-5" data-simplebar>

        <ul class="tt-side-nav">
            <li class="side-nav-item nav-item tt-sidebar-user">
                <div class="side-nav-link bg-secondary-subtle mx-2 rounded-3 px-2">
                    <div class="tt-user-avatar lh-1">
                        <div class="avatar avatar-md status-online">
                            <img class="rounded-circle" src="{{ uploadedAsset(auth()->user()->avatar) }}"
                                alt="avatar">
                        </div>
                    </div>
                    <div class="tt-nav-link-text ms-2">
                        <h6 class="mb-0 lh-1 tt-line-clamp tt-clamp-1">{{ auth()->user()->name }}</h6>
                        <span
                            class="text-muted fs-sm admin-role">{{ auth()->user()->role ? auth()->user()->role->name : localize('Super Admin') }}</span>
                    </div>
                </div>
            </li>
        </ul>
        <nav class="navbar navbar-vertical navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
                <div class="w-100" id="leftside-menu-container">
                    @include('backend.inc.sidebarMenus')
                </div>
            </div>
        </nav>
    </div>
</aside>
