@extends('backend.layouts.master')

@section('title')
    {{ localize('Update Event') }} {{ getSetting('title_separator') }} {{ getSetting('system_title') }}
@endsection

@section('contents')
    <section class="tt-section pt-4">
        <div class="container">
            <div class="row mb-3">
                <div class="col-12">
                    <div class="card tt-page-header">
                        <div class="card-body">
                            <div class="row g-3 align-items-center">
                                <div class="col-auto flex-grow-1">
                                    <div class="tt-page-title">
                                        <h2 class="h5 mb-0">{{ localize('Update Event') }} <sup
                                                class="badge bg-soft-warning px-2">{{ $lang_key }}</sup></h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row mb-4 g-4">

                <!--left sidebar-->
                <div class="col-xl-9 order-2 order-md-2 order-lg-2 order-xl-1">
                    <form action="{{ route('admin.events.update') }}" method="POST" class="pb-650" id="product-form"
                        onsubmit="return validateForm()">
                        @csrf
                        <input type="hidden" name="id" value="{{ $event->id }}">
                        <input type="hidden" name="lang_key" value="{{ $lang_key }}">
                        <!--basic information start-->
                        <div class="card mb-4" id="section-1">
                            <div class="card-body">
                                <h5 class="mb-4">{{ localize('Basic Information') }}</h5>

                                <div class="mb-4">
                                    <label for="name" class="form-label">{{ localize('Event Name') }}</label>
                                    <input class="form-control" type="text" id="name"
                                        value="{{ $event->collectLocalization('name', $lang_key) }}"
                                        placeholder="{{ localize('Type your product name') }}" name="name" required>
                                    <span class="fs-sm text-muted">
                                        {{ localize('Event name is required and recommended to be unique.') }}
                                    </span>
                                    <div>
                                        @error('name')
                                            <span class="text-danger mt-5">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <label for="description" class="form-label">{{ localize('Description') }}</label>
                                    <textarea id="description" class="editor" name="description" required>{{ $event->collectLocalization('description', $lang_key) }}</textarea>
                                    @error('description')
                                        <span class="text-danger mt-5">{{ $message }}</span>
                                    @enderror
                                </div>

                            </div>
                        </div>
                        <!--basic information end-->

                        @if (env('DEFAULT_LANGUAGE') == $lang_key)
                            <!--product image and gallery start-->
                            <div class="card mb-4" id="section-2">
                                <div class="card-body">
                                    <h5 class="mb-4">{{ localize('Image') }}</h5>
                                    <div class="mb-4">
                                        <label class="form-label">{{ localize('Thumbnail') }}</label>
                                        <div class="tt-image-drop rounded">
                                            <span class="fw-semibold">{{ localize('Choose Event Thumbnail') }}</span>
                                            <!-- choose media -->
                                            <div class="tt-product-thumb show-selected-files mt-3">
                                                <div class="avatar avatar-xl cursor-pointer choose-media"
                                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                                                    onclick="showMediaManager(this)" data-selection="single">
                                                    <input type="hidden" value="{{ $event->thumbnail_image }}"
                                                        name="image" id="image">
                                                    <div class="no-avatar rounded-circle">
                                                        <span><i data-feather="plus"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                            @error('image')
                                                <span class="text-danger mt-5">{{ $message }}</span>
                                            @enderror
                                            <!-- choose media -->
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div class="card mb-4" id="section-2">
                                <div class="card-body">
                                    <h5 class="mb-4">{{ localize('Banner') }}</h5>
                                    <div class="mb-4">
                                        <label class="form-label">{{ localize('Event banner') }} </label>
                                        <div class="tt-image-drop rounded">
                                            <span class="fw-semibold">{{ localize('Choose Event banner') }}</span>
                                            <!-- choose media -->
                                            <div class="tt-product-thumb show-selected-files mt-3">
                                                <div class="avatar avatar-xl cursor-pointer choose-media"
                                                    data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom"
                                                    onclick="showMediaManager(this)" data-selection="single">
                                                    <input type="hidden" name="event_banner"
                                                        value="{{ $event->event_banner }}" id="event_banner">
                                                    <div class="no-avatar rounded-circle">
                                                        <span><i data-feather="plus"></i></span>
                                                    </div>

                                                </div>

                                            </div>
                                            @error('event_banner')
                                                <span class="text-danger mt-5">{{ $message }}</span>
                                            @enderror
                                            <!-- choose media -->
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!--product image and gallery end-->



                            <!--product category start-->
                            <div class="card mb-4" id="section-3">
                                <div class="card-body">
                                    <h5 class="mb-4">{{ localize('Event Categories') }}</h5>
                                    <div class="mb-4">
                                        <select class="select2 form-control"
                                            data-placeholder="{{ localize('Select categories') }}" name="category_id">
                                            @foreach ($categories as $category)
                                                <option value="{{ $category->id }}"
                                                    {{ $category->id == $event->event_category_id ? 'selected' : '' }}>
                                                    {{ $category->collectLocalization('name') }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    @error('category_id')
                                        <span class="text-danger mt-1">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>
                            <!--product category end-->

                            <div class="card mb-4" id="section-3">
                                <div class="card-body">
                                    <h5 class="mb-4">{{ localize('Event Date') }}</h5>
                                    <div class="mb-3">
                                        <label class="form-label">{{ localize('Start End Date') }}</label>
                                        <div class="input-group">
                                            <input class="form-control date-range-picker date-range"
                                                data-startdate="{{ Base::date_format('m/d/Y', $event->start_date) }}"
                                                data-enddate="{{ Base::date_format('m/d/Y', $event->end_date) }}"
                                                type="text" placeholder="{{ localize('Start date - End date') }}"
                                                name="date_range" required>
                                        </div>
                                        @error('date_range')
                                            <span class="text-danger mt-1">{{ $message }}</span>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                            {{-- event time --}}
                            <div class="card mb-4" id="section-3">
                                <div class="card-body">
                                    <h5 class="mb-4">{{ localize('Event Time') }}</h5>
                                    <div class="row">
                                        <div class="col-sm-6 mb-2">
                                            <div class="mb-3">
                                                <label class="form-label">{{ localize('Start Time') }}</label>
                                                <div class="input-group">
                                                    <input class="form-control time-picker date-range" type="text"
                                                        placeholder="{{ localize('Start Time') }}"
                                                        value="{{ $event->start_time }}" name="start_time" required>
                                                </div>
                                                @error('start_time')
                                                    <span class="text-danger mt-1">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                        <div class="col-sm-6 mb-2">
                                            <div class="mb-3">
                                                <label class="form-label">{{ localize('End Time') }}</label>
                                                <div class="input-group">
                                                    <input class="form-control time-picker date-range" type="text"
                                                        placeholder="{{ localize('End Time') }}"
                                                        value="{{ $event->end_time }}" name="end_time" required>
                                                </div>
                                                @error('end_time')
                                                    <span class="text-danger mt-1">{{ $message }}</span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {{-- locations --}}
                            <div class="card mb-4" id="section-3">
                                <div class="card-body">
                                    <h5 class="mb-4">{{ localize('Location') }}</h5>
                                    <div class="mb-3">
                                        <label class="form-label">{{ localize('Set Location') }}</label>
                                        <input id="search-input" value="{{ $event->location }}"
                                            class="form-control mb-3" type="text" name="location"
                                            placeholder="Search Location" required>

                                        {{-- <div id="map" style="width:100%;height:200px"></div> --}}
                                    </div>
                                    @error('location')
                                        <span class="text-danger mt-1">{{ $message }}</span>
                                    @enderror
                                </div>
                            </div>

                            {{-- locations --}}
                            {{-- @dd(session()->all()) --}}
                            <!--event  price-->
                            {{-- @foreach ($event->types as $type)
                                <div class="card mb-4" id="section-5">
                                    <div class="card-body">
                                        <h5 class="mb-4 text-capitalize">{{ localize($type->name) }} Type</h5>
                                        <div class="row g-3">
                                            <div class="col-sm-6">
                                                <div class="mb-3">
                                                    <label for="price"
                                                        class="form-label">{{ localize('Price') }}</label>
                                                    <input type="hidden" value="{{ $type->id }}"
                                                        name="ticket_pricing_id[]">
                                                    <input type="number" min="5" id="price"
                                                        name="ticket_price[]"
                                                        placeholder="{{ localize('Ticket price') }}"
                                                        value="{{ $type->price }}" class="form-control" required>
                                                </div>
                                                @error('ticket_price')
                                                    <span class="text-danger mt-1">{{ $message }}</span>
                                                @enderror
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="mb-3">
                                                    <label for="price"
                                                        class="form-label">{{ localize('Limit') }}</label>
                                                    <input type="number" min="1" id="limit"
                                                        name="ticket_limit[]" value="{{ $type->limit }}"
                                                        placeholder="{{ localize('Ticket limit') }}" class="form-control"
                                                        required>
                                                </div>
                                                @error('ticket_limit')
                                                    <span class="text-danger mt-1">{{ $message }}</span>
                                                @enderror
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            @endforeach
                            <!--event price --> --}}

                            <div class="row g-3" id="section-9">

                                <div class="col-lg-12">
                                    <div class="card mb-4">
                                        <div class="card-body">
                                            <h5 class="mb-4">{{ localize('Event Status') }}</h5>
                                            <div class="tt-select-brand">
                                                <select class="select2 form-control" id="is_published"
                                                    name="is_published">
                                                    <option value="1"
                                                        {{ $event->is_visible == 1 ? 'selected' : '' }}>
                                                        {{ localize('Published') }}</option>
                                                    <option value="0"
                                                        {{ $event->is_visible == 0 ? 'selected' : '' }}>
                                                        {{ localize('Unpublished') }}</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        @endif
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-4">
                                    <button class="btn btn-primary" type="submit">
                                        <i data-feather="save" class="me-1"></i> {{ localize('Save Event') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- submit button end -->

                    </form>
                </div>

                <!--right sidebar-->
                <div class="col-xl-3 order-1 order-md-1 order-lg-1 order-xl-2">
                    <div class="card tt-sticky-sidebar">
                        <div class="card-body">
                            <h5 class="mb-4">{{ localize('Event Information') }}</h5>
                            <div class="tt-vertical-step">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#section-1" class="active">{{ localize('Basic Information') }}</a>
                                    </li>
                                    <li>
                                        <a href="#section-2">{{ localize('Event Images') }}</a>
                                    </li>
                                    <li>
                                        <a href="#section-3">{{ localize('Category') }}</a>
                                    </li>
                                    {{-- <li>
                                        <a href="#section-tags">{{ localize('Event tags') }}</a>
                                    </li>
                                    <li>
                                        <a href="#section-4">{{ localize('Event Brand & Unit') }}</a>
                                    </li> --}}
                                    <li>
                                        <a href="#section-5">{{ localize('Price, SKU & Variations') }}</a>
                                    </li>
                                    {{-- <li>
                                        <a href="#section-7">{{ localize('Shipping Configuration') }}</a>
                                    </li> --}}
                                    {{-- <li>
                                        <a href="#section-8">{{ localize('Event Taxes') }}</a>
                                    </li>

                                    <li>
                                        <a href="#section-9">{{ localize('Sell Target and Status') }}</a>
                                    </li>
                                    <li>
                                        <a href="#section-10">{{ localize('SEO Meta Options') }}</a>
                                    </li> --}}
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
    @include('backend.inc.product-scripts')
    <script>
        function validateForm() {

            return true


            var image = document.getElementById('image')
            var images = document.getElementById('images')

            var imageLength = image.value.length
            var imagesLength = images.value.length

            if (imageLength == 0) {
                notifyMe('danger', '{{ localize('Please select a  product feature image') }}');
                return false;
            }

            if (imagesLength == 0) {
                notifyMe('danger', '{{ localize('Please select product images') }}');
                return false;
            }

            return true;
        }

        function initMap() {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {
                    lat: {{ $event->lat }},
                    lng: {{ $event->long }}
                },
                zoom: 30
            });

            var input = document.getElementById('search-input');
            var searchBox = new google.maps.places.SearchBox(input);

            map.addListener('bounds_changed', function() {
                searchBox.setBounds(map.getBounds());
            });

            var markers = [];

            searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();

                if (places.length === 0) {
                    return;
                }

                markers.forEach(function(marker) {
                    marker.setMap(null);
                });
                markers = [];

                var bounds = new google.maps.LatLngBounds();
                places.forEach(function(place) {
                    if (!place.geometry) {
                        console.log('Returned place contains no geometry');
                        return;
                    }

                    markers.push(new google.maps.Marker({
                        map: map,
                        title: place.name,
                        position: place.geometry.location
                    }));

                    bounds.extend(place.geometry.location);

                    // Retrieve place details
                    var placeName = place.name;
                    var placeLat = place.geometry.location.lat();
                    var placeLng = place.geometry.location.lng();

                    $("#lat").val(placeLat)
                    $("#lng").val(placeLng)
                });

                map.fitBounds(bounds);
            });
        }
    </script>
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key={{ env('MAP_KEY') }}&libraries=places&callback=initMap"></script>
@endsection
