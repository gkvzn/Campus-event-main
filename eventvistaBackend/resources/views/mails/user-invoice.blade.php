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
                        style="font-size: 15px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; font-weight: bold; line-height: 1; vertical-align: top; ">
                        {{ localize('INVOICE') }}</p>
                    <br>
                    <p
                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 24px; vertical-align: top;">
                        {{ localize('Invoice No') }} : {{ getSetting('order_code_prefix') }}
                        {{ $order->orderGroup->order_code }}<br>
                        {{ localize('Order Date') }} : {{ date('d M, Y', strtotime($order->created_at)) }}
                    </p>

                    @if ($order->location_id != null)
                        <p>
                            {{ optional($order->location)->name }}
                        </p>
                    @endif
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
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; font-weight: bold; color: #5b5b5b; line-height: 1; vertical-align: top; ">
                            {{ localize('DELIVERY INFORMATION') }}</p>

                        {{-- @php
                            $shippingAddress = $order->orderGroup->shippingAddress;
                        @endphp --}}
                        <p
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 24px; vertical-align: top;">

                            {{ localize('Street') }}: {{ $order->address->address_1 ?? '' }}
                        </p>

                        <p
                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 24px; vertical-align: top;">

                            {{ localize('City') }}: {{ $order->address->city ?? '' }},
                        </p>
                        {{-- @if (isset($shippingAddress->state)) --}}
                        {{-- {{ localize('State') }}: {{ $shippingAddress->state ?? '' }},<br> --}}
                        {{-- @endif --}}

                        {{-- @if (isset($shippingAddress->country))
                            {{ localize('Country') }}: {{ $shippingAddress->country }}
                        @endif --}}

                        {{-- @if ($order->orderGroup->alternative_phone_no)
                            <br>
                            {{ localize('Alternative Phone') }}: {{ $order->orderGroup->alternative_phone_no }}
                        @endif --}}
                        <br>

                        @php
                            $deliveryInfo = $order->scheduled_delivery_info;
                        @endphp

                        {{-- <p class="mb-0">{{ localize('Delivery Type') }}:
                            <span
                                class="badge bg-primary">{{ Str::title(Str::replace('_', ' ', $order->shipping_delivery_type)) }}</span>


                        </p> --}}

                        @if ($order->shipping_delivery_type == getScheduledDeliveryType())
                            <p class="mb-0">
                                {{ localize('Delivery Time') }}:
                                @php
                                    echo date('d F', strtotime($deliveryInfo->scheduled_date));
                                @endphp
                                {{-- {{ date('d F', $deliveryInfo->scheduled_date) }}, --}}
                                {{ $deliveryInfo->timeline }}</p>
                        @endif
                        </p>

                    </td>


                    @if (!$order->orderGroup->is_pos_order)
                        <td colspan="4" style="width: 300px;">
                            <p
                                style="font-size: 11px; font-family: 'Open Sans', sans-serif; font-weight: bold; color: #5b5b5b; line-height: 1; vertical-align: top; ">
                                {{-- {{ localize('BILLING INFORMATION') }} --}}
                            </p>
                            </p>
                        </td>
                    @endif


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
                                <tr class="visibleMobile">
                                    <td height="40"></td>
                                </tr>
                                <tr>
                                    <td>
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                            align="center" class="fullPadding">
                                            <tbody>
                                                <tr>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 10px 7px 0;"
                                                        width="52%" align="left">
                                                        {{ localize('Item') }}
                                                    </th>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px;"
                                                        align="left">
                                                        {{ localize('Price') }}
                                                    </th>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px; text-align: center; "
                                                        align="center">
                                                        {{ localize('Qty') }}
                                                    </th>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px; text-align: center; "
                                                        align="center">
                                                        {{ localize('Coupon Code') }}
                                                    </th>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px; text-align: center; "
                                                        align="center">
                                                        {{ localize('Coupon Discount') }}
                                                    </th>
                                                    <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000000; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px; text-align: right; "
                                                        align="right">
                                                        {{ localize('Subtotal') }}
                                                    </th>
                                                </tr>
                                                <tr>
                                                    <td height="1" style="background: #e4e4e4;" colspan="4"></td>
                                                </tr>

                                                @foreach ($order->orderItems as $key => $item)
                                                    @php
                                                        $product = $item->product;
                                                    @endphp
                                                    <tr>
                                                        <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                                                            class="article">
                                                            <div>{{ $product->collectLocalization('name') }}</div>
                                                            <div class="text-muted">
                                                                @foreach ($item->connected_variations as $variation)
                                                                    <span class="fs-xs">
                                                                        {{ $variation->name }}:
                                                                        @foreach ($variation->values as $value)
                                                                            {{ $value->name }}
                                                                        @endforeach
                                                                        @if (!$loop->last)
                                                                            ,
                                                                        @endif
                                                                    </span>
                                                                @endforeach
                                                            </div>
                                                        </td>
                                                        <td
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0;">
                                                            {{ $item->unit_price }} <span
                                                                style="text-transform: uppercase">
                                                                {{ getSetting('default_currency') }}</span></td>
                                                        <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0; text-align: center;"
                                                            align="center">{{ $item->qty }}</td>
                                                        <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0; text-align: center;"
                                                            align="center">
                                                            {{ $order->applied_coupon_code ?? 'Nothing' }}</td>
                                                        <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0; text-align: center;"
                                                            align="center">
                                                            {{ formatPrice($order->coupon_discount_amount) }}
                                                        </td>
                                                        <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;"
                                                            align="right">
                                                            <strong>{{ $item->total_price }} <span
                                                                    style="text-transform: uppercase">
                                                                    {{ getSetting('default_currency') }}</span>
                                                            </strong>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td height="1" style="background: #e4e4e4;" colspan="4">
                                                        </td>
                                                    </tr>
                                                @endforeach

                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="20"></td>
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
                                        <!-- Table Total -->
                                        <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                            align="center" class="fullPadding">
                                            <tbody>
                                                <tr>
                                                    <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; ">
                                                        {{ localize('Subtotal') }}
                                                    </td>
                                                    <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; white-space:nowrap;"
                                                        width="80">
                                                        {{ $order->orderGroup->sub_total_amount }} <span
                                                            style="text-transform: uppercase">
                                                            {{ getSetting('default_currency') }}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; ">
                                                        {{ localize('Shipping Cost') }}
                                                    </td>
                                                    <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; ">
                                                        {{ $order->orderGroup->total_shipping_cost }} <span
                                                            style="text-transform: uppercase">
                                                            {{ getSetting('default_currency') }}</span>
                                                    </td>
                                                </tr>

                                                @if ($order->orderGroup->total_coupon_discount_amount > 0)
                                                    <tr>
                                                        <td
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; ">
                                                            {{ localize('Coupon Discount') }}
                                                        </td>
                                                        <td
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; ">
                                                            {{ $order->orderGroup->total_coupon_discount_amount }}
                                                            <span style="text-transform: uppercase">
                                                                {{ getSetting('default_currency') }}</span>
                                                        </td>
                                                    </tr>
                                                @endif


                                                @if ($order->orderGroup->is_pos_order)
                                                    <tr>
                                                        <td
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; ">
                                                            {{ localize('Discount') }}
                                                        </td>
                                                        <td
                                                            style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e; line-height: 22px; vertical-align: top; text-align:right; ">
                                                            {{ $order->orderGroup->total_discount_amount }} <span
                                                                style="text-transform: uppercase">
                                                                {{ getSetting('default_currency') }}</span>
                                                        </td>
                                                    </tr>
                                                @endif
                                                <tr>
                                                    <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000; line-height: 22px; vertical-align: top; text-align:right; ">
                                                        <strong>{{ localize('Grand Total') }}</strong>
                                                    </td>
                                                    <td
                                                        style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000; line-height: 22px; vertical-align: top; text-align:right; ">
                                                        <strong>{{ $order->orderGroup->grand_total_amount }} <span
                                                                style="text-transform: uppercase">
                                                                {{ getSetting('default_currency') }}</span></strong>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <!-- /Table Total -->
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
                            <td height="30"></td>
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
                                                <strong>{{ optional($order->user)->name }},</strong>
                                                <br>
                                                {{ getSetting('invoice_thanksgiving') }}
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
