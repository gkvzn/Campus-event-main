<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invoice</title>
    <style type="text/css">
        @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

        * {
            box-sizing: border-box;
        }

        pre,
        p {
            padding: 0;
            margin: 0;
        }

        table {
            font-family: 'Open Sans', sans-serif;
            width: 100%;
            border-collapse: collapse;
            padding: 1px;
        }

        td,
        th {
            text-align: left;
        }

        .visibleMobile {
            display: none;
        }

        .hiddenMobile {
            display: block;
        }
    </style>
</head>

<body>

    <div style="width: 600px">


        {{-- header start --}}
        <table style="width: 100%; table-layout: fixed">
            <tr>
                <td colspan="4"
                    style="border-right: 1px solid #e4e4e4; width: 300px; font-family: 'Open Sans', sans-serif; color: #323232; line-height: 1.5; vertical-align: top;">

                    <p
                        style="font-size: 15px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 24px; vertical-align: top;">

                    <h5 class="mb-0"
                        style="margin-bottom:8px; font-size: 15px; font-family: 'Open Sans', sans-serif; font-weight: bold; color: #5b5b5b; line-height: 1; vertical-align: top; ">
                        {{ localize('Booking No') }}
                        <span class="text-accent"> #{{ $booking->id }}
                        </span>
                    </h5>
                    <span class="text-muted" style="font-size:12px">{{ localize('Booking Date') }}:
                        {{ date('d M, Y', strtotime($booking->booking_date)) }} |
                        {{ $booking->start_time_renew . ' - ' . $booking->end_time_renew }}
                    </span>
                    </p>
                    {{-- 
                    @if ($order->location_id != null)
                        <p>
                            {{ optional($order->location)->name }}
                        </p>
                    @endif --}}
                </td>
                <td colspan="4" align="right"
                    style="width: 300px; text-align: right; padding-left: 50px; line-height: 1.5; color: #323232;">
                    <img src="{{ uploadedAsset(getSetting('favicon')) }}" alt="logo" border="0" />
                    <p
                        style="font-size: 12px; font-family: 'Open Sans', sans-serif;font-weight: bold; color: #5b5b5b; line-height: 1; vertical-align: top; ">
                        {{ getSetting('system_title') }}</p>
                    <p
                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 24px; vertical-align: top;">
                        {{ getSetting('contact_us_address') }}<br>
                        {{ localize('Phone') }}: {{ getSetting('contact_us_phone_number') }}
                    </p>
                </td>
            </tr>
            <tr class="visibleMobile">
                <td height="10"></td>
            </tr>
            <tr>
                <td colspan="10" style="border-bottom:1px solid #e4e4e4"></td>
            </tr>
        </table>
        {{-- header end --}}

        {{-- billing and shipping start --}}
        <table class="table" style="width: 100%;">
            <tbody style="display: table-header-group">
                <tr class="visibleMobile">
                    <td height="20"></td>
                </tr>
                <tr style=" margin: 0;">
                    <td colspan="4" style="width: 300px; padding-top:20px">
                        <p
                            style="margin-bottom:8px; font-size: 15px; font-family: 'Open Sans', sans-serif; font-weight: bold; color: #5b5b5b; line-height: 1; vertical-align: top; ">
                            {{ localize('Customer Info') }}</p>


                        {{-- @php
                            $shippingAddress = $order->orderGroup->shippingAddress;
                        @endphp --}}
                        <p
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 24px; vertical-align: top;">

                            {{ localize('Name') }}: {{ $booking->customer->name ?? '' }}
                        </p>

                        <p
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 24px; vertical-align: top;">

                            {{ localize('Email') }}: {{ $booking->customer->email ?? '' }}
                        </p>

                        <p
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 24px; vertical-align: top;">

                            {{ localize('Phone') }}: {{ $booking->customer->phone }}
                        </p>

                        <br>
                        </p>
                    </td>
                </tr>

            </tbody>
        </table>
        {{-- billing and shipping end --}}

        {{-- item details start --}}
        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable"
            bgcolor="#ffffff">
            <tbody>
                <tr>
                    <td>
                        <table width="600" border="0" cellpadding="0" cellspacing="0" align="center"
                            class="fullTable" bgcolor="#ffffff">
                            <tbody>

                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                            align="center" class="fullPadding">
                                            <thead>
                                                <tr>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 10px 7px 0;"
                                                        align="left">
                                                        {{ localize('WorkSpace') }}
                                                    </th>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px;"
                                                        align="left">
                                                        {{ localize('Duration') }}
                                                    </th>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px; text-align: center; "
                                                        align="center">
                                                        {{ localize('Venue Type') }}
                                                    </th>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px; text-align: center; "
                                                        align="center">
                                                        {{ localize('Price') . ' ' . localize('/hr') }}
                                                    </th>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px; text-align: center; "
                                                        align="center">
                                                        {{ localize('Location') }}
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody style="">

                                                <tr>
                                                    <td height="1" style="background: #e4e4e4;" colspan="6"></td>
                                                </tr>


                                                <tr>
                                                    <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                                                        class="article">
                                                        {{ $booking->clone_workspace->name }}
                                                    </td>

                                                    <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                                                        class="article">
                                                        {{ $booking->duration }} {{ localize('hr') }}
                                                    </td>

                                                    <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                                                        class="article">
                                                        <span
                                                            class="badge bg-soft-primary rounded-pill text-capitalize">
                                                            {{ localize($booking->clone_workspace->venue_type) }}
                                                        </span>
                                                    </td>



                                                    <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                                                        class="article">
                                                        {{ formatPrice($booking->price) }}
                                                    </td>

                                                    <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                                                        class="article">
                                                        {{ $booking->clone_workspace->location }}
                                                    </td>



                                                </tr>
                                                {{-- <tr>
                                                        <td height="1" style="background: #e4e4e4;" colspan="4">
                                                        </td>
                                                    </tr> --}}
                                                <tr>
                                                    <td height="1" style="background: #e4e4e4;" colspan="6"></td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="5"></td>
                                </tr>

                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        {{-- item details end --}}

        {{-- item total start --}}
        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable"
            bgcolor="#ffffff">
            <tbody>
                <tr>
                    <td>
                        <table width="600" border="0" cellpadding="0" cellspacing="0" align="center"
                            class="fullTable" bgcolor="#ffffff">
                            <tbody>
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                            align="center" class="fullPadding">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                        <h6 class="mb-1"
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                            {{ localize('Payment Method') }}</h6>
                                                        <span class=""
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height:0px; vertical-align: top; text-align:left; ">
                                                            <strong
                                                                class="text-left">{{ ucwords(str_replace('_', ' ', $booking->payment_method)) }}</strong>
                                                        </span>

                                                    </td>
                                                 

                                                    {{-- <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                        @can('all_bookings')
                                                            <h6 class="mb-1"
                                                                style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                                {{ localize('Vendor Earning') }}</h6>
                                                        @else
                                                            <h6 class="mb-1"
                                                                style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                                {{ localize('Your Earning') }}</h6>
                                                        @endcan
                                                        <strong
                                                            class="text-accent">{{ formatPrice($booking->total_vendor_earnings) }}
                                                        </strong>
                                                    </td> --}}


                                                    <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                        <h6 class="mb-1"
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                            {{ localize('Sub Total') }}</h6>
                                                        <strong>{{ formatPrice($booking->sub_total_amount) }} </strong>
                                                    </td>

                                                    <td
                                                    style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                    <h6 class="mb-1"
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                        {{ localize('Service Charges') }}</h6>
                                                    <strong
                                                        class="text-left">{{ formatPrice($booking->service_charges) }}</strong>
                                                </td>

                                                    <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                        <h6 class="mb-1"
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                            {{ localize('Coupon Discount') }}</h6>
                                                        <strong>{{ formatPrice($booking->coupon_discount_amount) }}
                                                        </strong>
                                                    </td>

                                                    <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                        <h6 class="mb-1"
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 0px; vertical-align: top; text-align:left; ">
                                                            {{ localize('Grand Total') }}</h6>
                                                        <strong
                                                            class="text-accent">{{ formatPrice($booking->grand_total_amount) }}
                                                        </strong>
                                                    </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        {{-- item total end --}}

        {{-- footer start --}}
        <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable"
            bgcolor="#ffffff">
            <tr>
                <td>
                    <table width="600" border="0" cellpadding="0" cellspacing="0" align="center"
                        class="fullTable" bgcolor="#ffffff" style="border-radius: 0 0 10px 10px;">
                        <tr>
                        <tr class="hiddenMobile">
                            <td height="70"></td>
                        </tr>
                        <tr class="visibleMobile">
                            <td height="20"></td>
                        </tr>
                        <td>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center"
                                class="fullPadding">
                                <tbody>
                                    <tr>
                                        <td
                                            style="font-size: 12px; color: #5b5b5b; font-family: 'Open Sans', sans-serif; line-height: 18px; vertical-align: top; text-align: left;">
                                            <p
                                                style="font-size: 12px; color: #5b5b5b; font-family: 'Open Sans', sans-serif; line-height: 18px; vertical-align: top; text-align: left;">
                                                {{ localize('Hello') }}
                                                {{-- <strong>{{ optional($order->user)->name }},</strong> --}}
                                                <br>
                                                {{ getSetting('workspace_invoice_thanksgiving') }}
                                            </p>
                                            <br><br>
                                            <p
                                                style="font-size: 12px; color: #5b5b5b; font-family: 'Open Sans', sans-serif; line-height: 18px; vertical-align: top; text-align: left;">
                                                {{ localize('Best Regards') }},
                                                <br>{{ getSetting('system_title') }} <br>
                                                {{ localize('Email') }}: {{ getSetting('contact_us_email') }}<br>
                                                {{ localize('Website') }}: {{ env('APP_URL_FRONTEND') }}
                                            </p>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
            </tr>
        </table>
        </td>
        </tr>
        </table>
        {{-- footer end --}}
    </div>

</body>

</html>
