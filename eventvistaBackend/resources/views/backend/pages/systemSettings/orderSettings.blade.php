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
                                <h5 class="mb-4">{{ localize('Order Information') }}</h5>

                                <div class="mb-3">
                                    {{-- <label for="enable_scheduled_order"
                                        class="form-label">{{ localize('Enable Scheduled Order') }}</label> --}}
                                    <input type="hidden" name="types[]" value="enable_scheduled_order">
                                    <input type="hidden" name="enable_scheduled_order" value="1">
                                    {{-- <select id="enable_scheduled_order" class="form-control text-uppercase select2"
                                        name="enable_scheduled_order" data-toggle="select2">
                                        <option value="1"
                                            {{ getSetting('enable_scheduled_order') == '1' ? 'selected' : '' }}>
                                            {{ localize('Enable') }}</option>
                                        <option value="0"
                                            {{ getSetting('enable_scheduled_order') == '0' ? 'selected' : '' }}>
                                            {{ localize('Disable') }}</option>
                                    </select> --}}
                                </div>

                                {{-- <div class="mb-3">
                                    <label for="allowed_order_days"
                                        class="form-label">{{ localize('Scheduled Order Days') }}</label>
                                    <input type="hidden" name="types[]" value="allowed_order_days">
                                    <input type="number" id="allowed_order_days" name="allowed_order_days"
                                        class="form-control" min="1" value="{{ getSetting('allowed_order_days') }}">
                                </div> --}}

                                <div class="mb-3">
                                    <label for="order_code_prefix"
                                        class="form-label">{{ localize('Order Code Prefix') }}</label>
                                    <input type="hidden" name="types[]" value="order_code_prefix">
                                    <input type="text" id="order_code_prefix" name="order_code_prefix"
                                        class="form-control" placeholder="{{ localize('#Grostore-') }}"
                                        value="{{ getSetting('order_code_prefix') }}">
                                </div>
                                <div class="mb-3">
                                    <label for="order_code_start"
                                        class="form-label">{{ localize('Order Code Starts From') }}</label>
                                    <input type="hidden" name="types[]" value="order_code_start">
                                    <input type="number" min="1" id="order_code_start" name="order_code_start"
                                        class="form-control" placeholder="{{ localize('1001') }}"
                                        value="{{ getSetting('order_code_start') }}">
                                </div>
                                <div class="mb-3">
                                    <label for="invoice_thanksgiving"
                                        class="form-label">{{ localize('Invoice Thank You Message') }}</label>
                                    <input type="hidden" name="types[]" value="invoice_thanksgiving">
                                    <textarea rows="4" id="invoice_thanksgiving" name="invoice_thanksgiving" class="form-control"
                                        placeholder="{{ localize('Type your thank you message for invoice') }}">{{ getSetting('invoice_thanksgiving') }}</textarea>
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

                    <form action="{{ route('admin.settings.update') }}" method="POST" enctype="multipart/form-data"
                        class="mb-4">
                        @csrf

                        <!--order settings-->
                        <div class="card mb-4" id="section-1">
                            <div class="card-body">
                                <h5 class="mb-4">{{ localize('Delivery Charges and Vat') }}</h5>

                                <div class="mb-3">
                                    {{-- <label for="enable_scheduled_order"
                                    class="form-label">{{ localize('Enable Scheduled Order') }}</label> --}}
                                    {{-- <input type="hidden" name="types[]" value="enable_scheduled_order"> --}}
                                    {{-- <input type="hidden" name="enable_scheduled_order" value="1"> --}}
                                    {{-- <select id="enable_scheduled_order" class="form-control text-uppercase select2"
                                    name="enable_scheduled_order" data-toggle="select2">
                                    <option value="1"
                                        {{ getSetting('enable_scheduled_order') == '1' ? 'selected' : '' }}>
                                        {{ localize('Enable') }}</option>
                                    <option value="0"
                                        {{ getSetting('enable_scheduled_order') == '0' ? 'selected' : '' }}>
                                        {{ localize('Disable') }}</option>
                                </select> --}}
                                </div>

                                <div class="mb-3">
                                    <label for="delivery_charges"
                                        class="form-label">{{ localize('Delivery Charges') }}</label>
                                    <input type="hidden" name="types[]" value="delivery_charges">
                                    <input type="number" id="delivery_charges" name="delivery_charges" class="form-control"
                                        min="1" value="{{ getSetting('delivery_charges') }}">
                                </div>


                                <div class="mb-3">
                                    <label for="vat" class="form-label">{{ localize('Vat') }}</label>
                                    <input type="hidden" name="types[]" value="vat">
                                    <input type="number" min="1" id="vat" name="vat" class="form-control"
                                        placeholder="{{ localize('1001') }}" value="{{ getSetting('vat') }}">
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




                    <form action="{{ route('admin.settings.update') }}" method="POST" enctype="multipart/form-data"
                    class="mb-4">
                    @csrf

                    <!--order settings-->
                    <div class="card mb-4" id="section-1">
                        <div class="card-body">
                            <h5 class="mb-4">{{ localize('Workspace Invoice Message') }}</h5>
                            <div class="mb-3">
                                <label for="invoice_thanksgiving"
                                    class="form-label">{{ localize('Invoice Thank You Message') }}</label>
                                <input type="hidden" name="types[]" value="workspace_invoice_thanksgiving">
                                <textarea rows="4" id="workspace_invoice_thanksgiving" name="workspace_invoice_thanksgiving" class="form-control"
                                    placeholder="{{ localize('Type your thank you message for invoice') }}">{{ getSetting('workspace_invoice_thanksgiving') }}</textarea>
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



                
                <form action="{{ route('admin.settings.update') }}" method="POST" enctype="multipart/form-data"
                class="mb-4">
                @csrf

                <!--order settings-->
                <div class="card mb-4" id="section-1">
                    <div class="card-body">
                        <h5 class="mb-4">{{ localize('Minimum Wallet Amount Withdraw') }}</h5>
                        <div class="mb-3">
                            <label for="invoice_thanksgiving"
                                class="form-label">{{ localize('Minimum Wallet Amount Withdraw') }}</label>
                            <input type="hidden" name="types[]" value="minimum_wallet_amount_withdraw">
                            <input rows="4" id="minimum_wallet_amount_withdraw" name="minimum_wallet_amount_withdraw" class="form-control"
                                placeholder="{{ localize('Minimum Withdraw') }}" value="{{ getSetting('minimum_wallet_amount_withdraw') }}">
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
