@extends('backend.layouts.master')

@section('title')
    {{ localize('Order Settings') }} {{ getSetting('title_separator') }} {{ getSetting('system_title') }}
@endsection

@section('contents')
    <section class="tt-section pt-4">
        <div class="container">
            <div class="row mb-3">
                <div class="col-12">
                    <div class="card tt-page-header">
                        <div class="card-body d-lg-flex align-items-center justify-content-lg-between">
                            <div class="tt-page-title">
                                <h2 class="h5 mb-lg-0">{{ localize('Order Settings') }}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-4 pb-650">
                <!--left sidebar-->
                <div class="col-xl-9 order-2 order-md-2 order-lg-2 order-xl-1">
    
                    <form action="{{ route('admin.settings.update') }}" method="POST" enctype="multipart/form-data"
                    class="mb-4">
                    @csrf

                    <!--order settings-->
                    <div class="card mb-4" id="section-1">
                        <div class="card-body">
                            <h5 class="mb-4">{{ localize('Events Bussiness Manager Percerntage') }}</h5>

                            <div class="mb-3">
                               
                            </div>

                            <div class="mb-3">
                                <label for="delivery_charges"
                                    class="form-label">{{ localize('Events Business Manager Percentage') }}</label>
                                <input type="hidden" name="types[]" value="events_business_manager_percentage">
                                <input type="number" id="events_business_manager_percentage" name="events_business_manager_percentage"
                                    class="form-control" min="1"
                                    value="{{ getSetting('events_business_manager_percentage') }}">
                            </div> 
                            <div class="mb-3">
                               
                            </div>

                            <h5 class="mb-4 mt-2">{{ localize('Workspace Business Manager Percentage') }}</h5>


                            <div class="mb-3">
                                <label for="delivery_charges"
                                    class="form-label">{{ localize('Workspace Business Manager Percentage') }}</label>
                                <input type="hidden" name="types[]" value="workspace_business_manager_percentage">
                                <input type="number" id="workspace_business_manager_percentage" name="workspace_business_manager_percentage"
                                    class="form-control" min="1"
                                    value="{{ getSetting('workspace_business_manager_percentage') }}">
                            </div> 


                        </div>
                    </div>
                    <!--order settings-->


                    <div class="mb-3">
                        <button class="btn btn-primary" type="submit">
                            <i data-feather="save" class="me-1"></i> {{ localize('Save Configuration') }}
                        </button>
                    </div>
                </form>
                </div>

                <!--right sidebar-->
                <div class="col-xl-3 order-1 order-md-1 order-lg-1 order-xl-2">
                    <div class="card tt-sticky-sidebar">
                        <div class="card-body">
                            <h5 class="mb-4">{{ localize('Configure Order Settings') }}</h5>
                            <div class="tt-vertical-step">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#section-1" class="active">{{ localize('Order Information') }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </section>
@endsection

@section('scripts')
    <script>
        "use strict";

        // runs when the document is ready --> for media files
        $(document).ready(function() {
            //  
        });
    </script>
@endsection
