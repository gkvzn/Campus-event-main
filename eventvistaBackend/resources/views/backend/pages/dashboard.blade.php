@extends('backend.layouts.master')

@section('title')
    {{ localize('Dashboard') }} {{ getSetting('title_separator') }} {{ getSetting('system_title') }}
@endsection

@section('contents')
    <section class="tt-section pt-4">
        <div class="container">
            <div class="row mb-4">
                <div class="col-12">
                    <div class="card tt-page-header">
                        <div class="card-body d-lg-flex align-items-center justify-content-lg-between">
                            <div class="tt-page-title">
                                <h2 class="h5 mb-lg-0">{{ localize('Admin Dashboard') }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <!-- counter in dashboard -->
            <div class="row g-3 mb-3">


                <a href="#" class="col-lg-4 col-sm-6">
                    <div class="card h-100 flex-column">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="avatar avatar-lg">
                                    <div class="text-center bg-soft-accent rounded-circle">
                                        <span class="text-accent"> <i data-feather="users"></i></span>
                                    </div>
                                </div>
                                <div class="ms-3">
                                    <h4 class="mb-1">
                                        {{ \App\Models\User::count() }}
                                    </h4>
                                    <span class="text-muted">{{ localize('Total Users') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>


                <a href="#" class="col-lg-4 col-sm-6">
                    <div class="card h-100 flex-column">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="avatar avatar-lg">
                                    <div class="text-center bg-soft-success rounded-circle">
                                        <span class="text-success"> <i data-feather="bar-chart-2"></i></span>
                                    </div>
                                </div>
                                <div class="ms-3">
                                    <h4 class="mb-1">{{ \App\Models\Business\Events::count() }}</h4>
                                    <span class="text-muted">{{ localize('Total Events') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>


                {{-- Total Categories --}}

                <a href="#" class="col-lg-4 col-sm-6">
                    <div class="card h-100 flex-column">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <div class="avatar avatar-lg">
                                    <div class="text-center bg-soft-success rounded-circle">
                                        <span class="text-success"> <i data-feather="sliders"></i></span>
                                    </div>
                                </div>
                                <div class="ms-3">
                                    {{-- <h4 class="mb-1">{{ \App\Models\Category::count() }}</h4> --}}
                                    <span class="text-muted">{{ localize('Total Categories') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>


            </div>
    </section>
@endsection



@section('scripts')
    <script type="text/javascript">
        let message = document.getElementById("delivery_status");
        document.addEventListener("DOMContentLoaded", functionCall());

        function functionCall() {

            var url = window.location;
            let params = new URLSearchParams(url.search);
            let val = params.get('timeline')
            if (val == null) {
                val = 1;
            }
            $('#timeline').val(val);

        }
    </script>


    <script type="text/javascript">
        function handler(e) {

            var incStr = e.target.value.includes("to");

            if (incStr == true)
                val = e.target.value
            window.location = `admin?&timeline=${val}`;

        }
    </script>
@endsection
