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
                                <h2 class="h5 mb-lg-0">{{ localize('Contact Us Settings') }}</h2>
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
                            <h5 class="mb-4">{{ localize('Contact Us Information') }}</h5>

                            <div class="mb-3">
                           
                            </div>

                            <div class="mb-3">
                                <label for="delivery_charges"
                                    class="form-label">{{ localize('Contact Us Heading') }}</label>
                                <input type="hidden" name="types[]" value="contact_us_heading">
                                <input type="text" id="contact_us_heading" name="contact_us_heading"
                                    class="form-control" min="1" value="{{ getSetting('contact_us_heading') }}">
                            </div>

                            <div class="mb-3">
                                <label for="delivery_charges"
                                    class="form-label">{{ localize('Contact Us Short Description') }}</label>
                                <input type="hidden" name="types[]" value="contact_us_short_description">
                                <input type="text" id="contact_us_short_description" name="contact_us_short_description"
                                    class="form-control" min="1" value="{{ getSetting('contact_us_short_description') }}">
                            </div>

                            <div class="mb-3">
                                <label for="delivery_charges"
                                    class="form-label">{{ localize('Contact Us Phone Number') }}</label>
                                <input type="hidden" name="types[]" value="contact_us_phone_number">
                                <input type="text" id="contact_us_phone_number" name="contact_us_phone_number"
                                    class="form-control" min="1" value="{{ getSetting('contact_us_phone_number') }}">
                            </div>

                            <div class="mb-3">
                                <label for="delivery_charges"
                                    class="form-label">{{ localize('Contact Us Email') }}</label>
                                <input type="hidden" name="types[]" value="contact_us_email">
                                <input type="email" id="contact_us_email" name="contact_us_email"
                                    class="form-control" min="1" value="{{ getSetting('contact_us_email') }}">
                            </div>

                            <div class="mb-3">
                                <label for="delivery_charges"
                                    class="form-label">{{ localize('Contact Us Address') }}</label>
                                <input type="hidden" name="types[]" value="contact_us_address">
                                <input type="text" id="contact_us_address" name="contact_us_address"
                                    class="form-control" min="1" value="{{ getSetting('contact_us_address') }}">
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
                            <h5 class="mb-4">{{ localize('Contact Settings') }}</h5>
                            <div class="tt-vertical-step">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#section-1" class="active">{{ localize('Contact Us Information') }}</a>
                                    </li>

                                    <li>
                                        <a href="#section-2">{{ localize('Contact Us Heading') }}</a>
                                    </li>

                                    <li>
                                        <a href="#section-3">{{ localize('Contact Us Short Description') }}</a>
                                    </li>

                                    <li>
                                        <a href="#section-3">{{ localize('Contact Us Phone Number') }}</a>
                                    </li>

                                    <li>
                                        <a href="#section-3">{{ localize('Contact Us Email') }}</a>
                                    </li>
                                    <li>
                                        <a href="#section-3">{{ localize('Contact Us Address') }}</a>
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
