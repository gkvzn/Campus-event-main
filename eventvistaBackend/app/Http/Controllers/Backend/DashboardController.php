<?php

namespace App\Http\Controllers\Backend;

use App\Exports\DashboardArrayExport;
use App\Http\Controllers\Controller;
use App\Models\Business\EventBookings;
use App\Models\Business\Events;
use App\Models\Business\TicketTypes;
use App\Models\Business\VendorAccounts;
use App\Models\Business\VendorWithdraws;
use App\Models\Business\WorkSpace\WorkSpace;
use App\Models\Business\WorkSpace\WorkSpaceBookings;
use App\Models\Category;
use App\Models\Order;
use App\Models\OrderGroup;
use App\Models\OrderItem;
use App\Models\SystemSetting;
use App\Traits\AdminBase;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Facades\Excel;

class DashboardController extends Controller
{
    use AdminBase;
    // admin dashboard
    public function index(Request $request)
    {
        // --------------------------------------------------------------counters

        $values = [];

        // dd($totalSalesData);
        $view = view('backend.pages.dashboard', $values);

        // give permission to the Super admin
        $user = auth()->user();
        if ($user->user_type == 'admin' && $user->hasRole('Super Admin')) {
            return $view;
        } elseif ($user->user_type == 'admin') {
            $user->assignRole('Super Admin');
        }

        return $view;
    }

    public function business_index(Request $request)
    {

        // // total sales chart
        // $totalSalesChart = $this->totalSalesChart($request->timeline);
        // $timeCacheKey = $request->timeline ?? 'nothing';
        // $totalSalesData = $totalSalesChart[0];
        // $timelineText = $totalSalesChart[1];

        // // top 5 category sales
        // $totalCatSalesData = $this->topFiveCategoryChart();

        // if (isset($request->timeline)) {
        //     $totalOrdersData = $this->last30DaysOrderChart($request->timeline);
        //     $test = $totalOrdersData[1];
        // } else {
        //     // last 30 days orders
        //     $time = 1;
        //     $totalOrdersData = $this->last30DaysOrderChart($time);
        //     $test = $totalOrdersData[1];
        // }
        // $totalOrdersData = $totalOrdersData[0];

        // $arr = explode(' ', $request->timeline);

        // if (isset($arr[2])) {
        //     $date2 = strtotime($arr[2]);
        //     // $diff = $date2 - $date1;
        //     // $days = round($diff / (60 * 60 * 24));
        //     $timeline = $arr;
        //     $timelineText = localize($arr[0].' to '.$arr[2]);
        // } elseif ($request->timeline > 1) {
        //     $timeline = $request->timeline;
        // } else {
        //     $timeline = 1;
        // }
        // // this month sales
        // $thisMonthSaleData = [];

        // // --------------------------------------------------------------counters
        // $dayStart = Carbon::now()->startOfDay();
        // $monthStart = Carbon::now()->startOfMonth();
        // $yearStart = Carbon::now()->startOfYear();

        // // today's earning
        // $orderGroupIds = Order::where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->where('created_at', '>=', $dayStart)->pluck('order_group_id');

        // $todayEarning = OrderGroup::whereIn('id', $orderGroupIds)->sum('grand_total_amount');

        // // today's pending earning
        // $orderGroupIds = Order::where('delivery_status', '!=', orderDeliveredStatus())->where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->where('created_at', '>=', $dayStart)->pluck('order_group_id');
        // $todayPendingEarning = OrderGroup::whereIn('id', $orderGroupIds)->sum('grand_total_amount');

        // // this year earning
        // $orderGroupIds = Order::where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->where('created_at', '>=', $yearStart)->pluck('order_group_id');
        // $thisYearEarning = OrderGroup::whereIn('id', $orderGroupIds)->sum('grand_total_amount');

        // // total earning
        // $orderGroupIds = Order::where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->pluck('order_group_id');
        // $totalEarning = OrderGroup::whereIn('id', $orderGroupIds)->sum('grand_total_amount');

        // // today's sale count
        // $todaySaleCount = OrderItem::where('created_at', '>=', $dayStart)->whereHas('order', function ($query) {
        //     $query->IsPaid();
        // })->sum('qty');

        // // this month sale count
        // $monthSaleCount = OrderItem::where('created_at', '>=', $monthStart)->whereHas('order', function ($query) {
        //     $query->IsPaid();
        // })->sum('qty');

        // // this year sale count
        // $yearSaleCount = OrderItem::where('created_at', '>=', $yearStart)->whereHas('order', function ($query) {
        //     $query->IsPaid();
        // })->sum('qty');

        // --------------------------------------------------------------counters




        $wallet = $this->wallet();
        // accounts
        $account = VendorAccounts::MyAccounts()->Default()->first();
        // view return
        // with draws 
        $withdraws = VendorWithdraws::MyWithdraws()->get();

        $eventsBookings = EventBookings::orderBy('created_at')
            ->with(['event', 'customer', 'business_manager', 'tickets'])
            ->MyBookings()
            ->IsPaid()
            ->withCount('tickets')
            ->take(10)
            ->get();

        $totalApprovedEvents = Events::IsUser()->IsStatus()->count();
        $totalCancelledEvents = Events::IsUser()->where('status', 0)->count();
        $totalPublishedEvents = Events::IsUser()->where('is_visible', 1)->count();
        $totalEvents = Events::IsUser()->count();

        $totalWorkspaces = WorkSpace::IsUser()->count();
        $totalApprovedWorkspaces = WorkSpace::IsUser()->IsStatus()->count();
        $totalCanlledWorkspaces = WorkSpace::IsUser()->where('status', 0)->count();
        $totalPublishedWkspaces = WorkSpace::IsUser()->where('is_visible', 1)->count();


        $totalEventsBookings = EventBookings::MyBookings()->count();
        $totalPaidEventsBookings = EventBookings::MyBookings()->where('payment_status', 'paid')->count();
        $totalUnPaidEventsBookings = EventBookings::MyBookings()->where('payment_status', 'unpaid')->count();


        $TotalworkspacesBookings = WorkSpaceBookings::MyBookings()->count();
        $TotalPaidworkspacesBookings = WorkSpaceBookings::MyBookings()->where('payment_status', 'paid')->count();
        $TotalUnpaidworkspacesBookings = WorkSpaceBookings::MyBookings()->where('payment_status', 'unpaid')->count();




        // IsStatus()
        $values = [
            'eventsBookings'       => $eventsBookings,
            'wallet'               => $wallet,
            'account'              => $account,
            'withdraws'            => $withdraws,
            'totalEvents'          => $totalEvents,
            'totalApprovedEvents'  => $totalApprovedEvents,
            'totalCancelledEvents' => $totalCancelledEvents,
            'totalPublishedEvents' => $totalPublishedEvents,
            'totalWorkspaces'      => $totalWorkspaces,
            'totalApprovedWorkspaces' => $totalApprovedWorkspaces,
            'totalCanlledWorkspaces' => $totalCanlledWorkspaces,
            'totalPublishedWkspaces' => $totalPublishedWkspaces,
            'totalPaidEventsBookings' => $totalPaidEventsBookings,
            'totalUnPaidEventsBookings' => $totalUnPaidEventsBookings,
            'totalEventsBookings'    => $totalEventsBookings,
            'TotalworkspacesBookings'  => $TotalworkspacesBookings,
            'TotalPaidworkspacesBookings'  => $TotalPaidworkspacesBookings,
            'TotalUnpaidworkspacesBookings'  => $TotalUnpaidworkspacesBookings,
        ];

        // dd($totalSalesData);
        $view = view('backend.pages.business-dashboard', $values);

        // give permission to the Super admin
        $user = auth()->user();
        if ($user->user_type == 'admin' && $user->hasRole('Super Admin')) {
            return $view;
        } elseif ($user->user_type == 'admin') {
            $user->assignRole('Super Admin');
        }

        return $view;
    }


    public function export(Request $request)
    {

        // total sales chart
        $totalSalesChart = $this->totalSalesChart($request->timeline);
        $totalSalesData = $totalSalesChart[0];
        $timelineText = $totalSalesChart[1];

        // top 5 category sales
        $totalCatSalesData = $this->topFiveCategoryChart();

        if (isset($request->timeline)) {
            $totalOrdersData = $this->last30DaysOrderChart($request->timeline);
            $test = $totalOrdersData[1];
        } else {
            // last 30 days orders
            $time = 1;
            $totalOrdersData = $this->last30DaysOrderChart($time);
            $test = $totalOrdersData[1];
        }
        $totalOrdersData = $totalOrdersData[0];

        $arr = explode(' ', $request->timeline);

        if (isset($arr[2])) {
            $date1 = strtotime($arr[0]);
            $date2 = strtotime($arr[2]);
            $diff = $date2 - $date1;
            $days = round($diff / (60 * 60 * 24));
            $timeline = $days;
            $timelineText = localize($arr[0] . ' to ' . $arr[2]);
        } elseif ($request->timeline > 1) {
            $timeline = $request->timeline;
        } else {
            $timeline = 1;
        }
        // this month sales
        $thisMonthSaleData = $this->thisMonthSaleChart($arr);

        // --------------------------------------------------------------counters
        $dayStart = Carbon::now()->startOfDay();
        $monthStart = Carbon::now()->startOfMonth();
        $yearStart = Carbon::now()->startOfYear();

        // today's earning
        $orderGroupIds = Order::where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->where('created_at', '>=', $dayStart)->pluck('order_group_id');
        $todayEarning = OrderGroup::whereIn('id', $orderGroupIds)->sum('grand_total_amount');

        // today's pending earning
        $orderGroupIds = Order::where('delivery_status', '!=', orderDeliveredStatus())->where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->where('created_at', '>=', $dayStart)->pluck('order_group_id');
        $todayPendingEarning = OrderGroup::whereIn('id', $orderGroupIds)->sum('grand_total_amount');

        // this year earning
        $orderGroupIds = Order::where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->where('created_at', '>=', $yearStart)->pluck('order_group_id');
        $thisYearEarning = OrderGroup::whereIn('id', $orderGroupIds)->sum('grand_total_amount');

        // total earning
        $orderGroupIds = Order::where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->pluck('order_group_id');
        $totalEarning = OrderGroup::whereIn('id', $orderGroupIds)->sum('grand_total_amount');

        // today's sale count
        $todaySaleCount = OrderItem::where('created_at', '>=', $dayStart)->sum('qty');

        // this month sale count
        $monthSaleCount = OrderItem::where('created_at', '>=', $monthStart)->sum('qty');

        // this year sale count
        $yearSaleCount = OrderItem::where('created_at', '>=', $yearStart)->sum('qty');
        $totalSalesData['total_order'] = Order::where('created_at', '>=', \Carbon\Carbon::now()->subDays($timeline))->isPlacedOrPending()->count();

        $totalSalesData['pending_order'] = Order::where('created_at', '>=', \Carbon\Carbon::now()->subDays($timeline))->isPlacedOrPending()->where('delivery_status', 'order-confirmed')->count();
        $totalSalesData['processing'] = Order::where('created_at', '>=', \Carbon\Carbon::now()->subDays($timeline))->isPlacedOrPending()->where('delivery_status', 'order-in-preparation')->count();
        $totalSalesData['delivered'] = Order::where('created_at', '>=', \Carbon\Carbon::now()->subDays($timeline))->isPlacedOrPending()->where('delivery_status', 'order-delivered')->count();
        // --------------------------------------------------------------counters

        $totalSalesData['totalCategorySalesCount'] = $totalCatSalesData->totalCategorySalesCount;

        $values = [
            'totalSalesData' => $totalSalesData,
            'timelineText' => $timelineText,
            'totalCatSalesData' => $totalCatSalesData,
            'totalOrdersData' => $totalOrdersData,
            'thisMonthSaleData' => $thisMonthSaleData,
            'todayEarning' => $todayEarning,
            'todayPendingEarning' => $todayPendingEarning,
            'totalEarning' => $totalEarning,
            'thisYearEarning' => $thisYearEarning,
            'monthsalwtext' => $test,
            'time' => $timeline,
            'todaySaleCount' => $todaySaleCount,
            'monthSaleCount' => $monthSaleCount,
            'yearSaleCount' => $yearSaleCount,
        ];

        $val = [
            $values,
        ];

        // dd($values);
        $headings = [
            'Total Earning ' . $timelineText,
            'Top 5 Category Sales',
            'Total order ' . $timelineText,
            'Pending Order ' . $timelineText,
            'Processing Order ' . $timelineText,
            'Delivered Order ' . $timelineText,

        ];

        return Excel::download(new DashboardArrayExport($val, $headings), 'Dashboar-Analytics.xlsx');

        $view = view('backend.pages.dashboard', $values);

        // give permission to the Super admin
        $user = auth()->user();
        if ($user->user_type == 'admin' && $user->hasRole('Super Admin')) {
            return $view;
        } elseif ($user->user_type == 'admin') {
            $user->assignRole('Super Admin');
        }

        return $view;
    }

    // admin profile
    public function profile()
    {
        $user = auth()->user();

        return view('backend.pages.profile', compact('user'));
    }

    // admin profile
    public function updateProfile(Request $request)
    {
        $user = auth()->user();
        $user->name = $request->first_name;
        // $user->last_name = $request->last_name;
        $user->phone = $request->phone;
        $user->avatar = $request->avatar;

        if ($request->has('password') && $request->password != '') {
            if ($request->password != $request->password_confirmation) {
                flash(localize('Password confirmation does not match'))->error();

                return back();
            }
            $user->password = Hash::make($request->password);
        }

        $user->save();

        flash(localize('Your profile has been successfully updated.'))->success();

        return back();
    }

    // total sales chart
    private function totalSalesChart($time)
    {
        $cacheKey = 'totalsale' . $time . 'chart';
        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }
        $arr = explode(' ', $time);
        $timeline = 1; // 7, 30 or 90 days
        $timelineText = localize('Today');

        if ((int) $time > 1) {
            $timeline = (int) $time;
            if ($timeline == 7) {
                $timelineText = localize('Last 7 days');
            } elseif ($timeline == 30) {
                $timelineText = localize('Last 30 days');
            } elseif ($timeline == 90) {
                $timelineText = localize('Last 3 months');
            } else {
                $timelineText = localize('Last year');
            }
        }
        // $orderGroupIdsQuery = Order::where('delivery_status', '!=', orderCancelledStatus())
        //     ->where('payment_status', paidPaymentStatus())
        //     ->where('created_at', '>=', Carbon::now()->subDays($timeline))
        //     ->pluck('order_group_id');
        if (isset($arr[2])) {
            $startDate = $arr[0];
            $endDate = $arr[2];
            $timelineText = localize($startDate . ' to ' . $endDate);

            $startDateTimestamp = strtotime($startDate);
            $endDateTimestamp = strtotime($endDate);
            $days = round(($endDateTimestamp - $startDateTimestamp) / (60 * 60 * 24));
        } else {
            $startDate = date('Y-m-d', strtotime("-$timeline days"));
            $endDate = date('Y-m-d');
            // $timelineText = localize($startDate . ' to ' . $endDate);

            $days = $timeline;
            $endDateTimestamp = time(); // Set current timestamp as the fallback value
        }

        $orderGroupIds = Order::where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->when(true, function ($query) use ($timeline) {
            if ($timeline != 1) {
                $query->where('created_at', '>=', Carbon::now()->subDays($timeline));
            }
            if ($timeline == 1) {
                $query->whereDate('created_at', Carbon::today()->format('Y-m-d'));
            }
        })->pluck('order_group_id');

        $orderGroupsQuery = OrderGroup::whereIn('id', $orderGroupIds)->oldest();
        $totalSalesTimelineInString = '';
        $totalSalesAmountInString = '';

        for ($i = $days; $i >= 0; $i--) {
            $totalSalesAmount = 0;

            foreach ($orderGroupsQuery->get() as $orderGroup) {
                if (isset($arr[2])) {
                    if (date('Y-m-d', strtotime("-$i days", $endDateTimestamp)) == date('Y-m-d', strtotime($orderGroup->created_at))) {
                        $totalSalesAmount += $orderGroup->grand_total_amount;
                    }
                } else {
                    if (date('Y-m-d', strtotime("-$i days")) == date('Y-m-d', strtotime($orderGroup->created_at))) {
                        $totalSalesAmount += $orderGroup->grand_total_amount;
                    }
                }
            }

            if ($i == 0) {
                $totalSalesTimelineInString .= json_encode(date('Y-m-d', strtotime("-$i days", $endDateTimestamp)));
                $totalSalesAmountInString .= json_encode($totalSalesAmount);
            } else {
                $totalSalesTimelineInString .= json_encode(date('Y-m-d', strtotime("-$i days", $endDateTimestamp))) . ',';
                $totalSalesAmountInString .= json_encode($totalSalesAmount) . ',';
            }
        }

        $totalSalesData = new SystemSetting; // to create temp instance.
        $totalSalesData->labels = $totalSalesTimelineInString;
        $totalSalesData->amount = $totalSalesAmountInString;
        $totalSalesData->totalEarning = $orderGroupsQuery->sum('grand_total_amount');

        // Store the result in the cache
        $result = [$totalSalesData, $timelineText];
        Cache::put($cacheKey, $result, 500); // Set appropriate cache expiration time

        return $result;
    }

    // top 5 category chart
    private function topFiveCategoryChart()
    {
        $cacheKey = 'topfive';

        if (Cache::has($cacheKey)) {
            return Cache::get($cacheKey);
        }
        $categories = Category::orderBy('total_sale_count', 'DESC')->take(5);
        $totalCategorySalesCount = $categories->sum('total_sale_count');
        $catLabelsInString = '';
        $catSeries = [];

        foreach ($categories->get() as $key => $cat) {
            $catLabelsInString .= json_encode($cat->name);
            if ($key + 1 != 5) {
                $catLabelsInString .= ',';
            }
            array_push($catSeries, (float) $cat->total_sale_count);
        }

        $totalCatSalesData = new SystemSetting; // to create temp instance.
        $totalCatSalesData->totalCategorySalesCount = $totalCategorySalesCount;
        $totalCatSalesData->series = json_encode($catSeries);
        $totalCatSalesData->labels = $catLabelsInString;

        $result = $totalCatSalesData;
        Cache::put($cacheKey, $result, 500); // Set appropriate cache expiration time

        return $result;
    }

    // last 30 days order
    private function last30DaysOrderChart($time = 1)
    {
        // $cacheKey = 'orders' . $time;

        // if (Cache::has($cacheKey)) {
        //     return Cache::get($cacheKey);
        // }

        $arr = explode(' ', $time);
        if (isset($arr[2])) {

            $date1 = strtotime($arr[0]);
            $date2 = strtotime($arr[2]);
            $diff = $date2 - $date1;
            $days = round($diff / (60 * 60 * 24));
            $timelineOrder = $days;
            $timelineText = localize($arr[0] . ' to ' . $arr[2]);
        } elseif ($time == 1) {
            $timelineOrder = $time;
            $timelineText = localize('Today');
        } elseif ($time == 7) {
            $timelineOrder = $time;
            $timelineText = localize('Last 7 days');
        } elseif ($time == 30) {
            $timelineOrder = $time;
            $timelineText = localize('Last 30 days');
        } elseif ($time == 90) {
            $timelineOrder = $time;
            $timelineText = localize('Last 3 months');
        } elseif ($time == 365) {
            $timelineOrder = $time;
            $timelineText = localize('Last year');
        }

        // 7, 30 or 90 days
        $totalOrdersTimelineInString = '';
        $totalOrdersAmountInString = '';
        $ordersQuery = Order::when(true, function ($query) use ($timelineOrder) {
            if ($timelineOrder != 1) {
                $query->where('created_at', '>=', Carbon::now()->subDays($timelineOrder));
            }
            if ($timelineOrder == 1) {
                $query->whereDate('created_at', Carbon::today()->format('Y-m-d'));
            }
        })->IsPaid()->oldest();

        for ($j = $timelineOrder; $j >= 0; $j--) {
            $totalOrdersAmount = 0;

            foreach ($ordersQuery->get() as $order) {
                if (date('Y-m-d', strtotime($j . ' days ago')) == date('Y-m-d', strtotime($order->created_at))) {
                    $totalOrdersAmount += 1;
                }
            }

            if ($j == 0) {
                $totalOrdersTimelineInString .= json_encode(date('Y-m-d', strtotime($j . ' days ago')));
                $totalOrdersAmountInString .= json_encode($totalOrdersAmount);
            } else {
                $totalOrdersTimelineInString .= json_encode(date('Y-m-d', strtotime($j . ' days ago'))) . ',';
                $totalOrdersAmountInString .= json_encode($totalOrdersAmount) . ',';
            }
        }

        $totalOrdersData = new SystemSetting; // to create temp instance.
        $totalOrdersData->labels = $totalOrdersTimelineInString;
        $totalOrdersData->amount = $totalOrdersAmountInString;
        $totalOrdersData->totalOrders = $ordersQuery->count();

        $result = [$totalOrdersData, $timelineText];
        // Cache::put($cacheKey, $result, 500); // Set appropriate cache expiration time

        return $result;
    }

    // this month sale's chart
    private function thisMonthSaleChart($arr)
    {

        $monthStart = Carbon::now()->startOfMonth();
        $orderGroupIds = Order::where('delivery_status', '!=', orderCancelledStatus())->IsPaid()->where('created_at', '>=', $monthStart)->pluck('order_group_id');
        $orderGroupsThisMonthQuery = OrderGroup::whereIn('id', $orderGroupIds)->oldest();
        $thisMonthTimelineInString = '';
        $thisMonthAmountInString = '';

        $today = today();
        $dates = [];
        $datesReadable = [];

        if (isset($arr[2])) {
            $startDate = Carbon::parse($arr[0]); // Start date: Jan 2003
            $endDate = Carbon::create($arr[2]); // End date: Feb 2023

            for ($date = $startDate; $date->lte($endDate); $date->addMonth()) {
                $formattedDate = $date->format('m Y');
                $dates[] = $date->format('Y-m-d');
                $datesReadable[] = $formattedDate;
            }
        } else {
            for ($i = 1; $i < $today->daysInMonth + 1; $i++) {
                $dates[] = \Carbon\Carbon::createFromDate($today->year, $today->month, $i)->format('Y-m-d');
                $datesReadable[] = \Carbon\Carbon::createFromDate($today->year, $today->month, $i)->format('M');
            }
        }

        // $datesReadable = [];

        // // Loop through each month between the start and end dates

        // // Print the array of readable dates
        // dd($datesReadable);

        foreach ($dates as $key => $date) {
            $totalOrdersAmount = 0;
            foreach ($orderGroupsThisMonthQuery->get() as $orderGroup) {
                if (isset($arr[2])) {
                    if ($date >= date('Y-m-d', strtotime($orderGroup->created_at))) {
                        $totalOrdersAmount += $orderGroup->grand_total_amount;
                    }
                } else {
                    if ($date == date('Y-m-d', strtotime($orderGroup->created_at))) {
                        $totalOrdersAmount += $orderGroup->grand_total_amount;
                    }
                }
            }

            if ($key == count($dates) - 1) {
                $thisMonthTimelineInString .= json_encode($datesReadable[$key]);
                $thisMonthAmountInString .= json_encode($totalOrdersAmount);
            } else {
                $thisMonthTimelineInString .= json_encode($datesReadable[$key]) . ',';
                $thisMonthAmountInString .= json_encode($totalOrdersAmount) . ',';
            }
        }
        $thisMonthSaleData = new SystemSetting; // to create temp instance.
        $thisMonthSaleData->labels = $thisMonthTimelineInString;
        $thisMonthSaleData->amount = $thisMonthAmountInString;
        $thisMonthSaleData->totalEarning = $orderGroupsThisMonthQuery->sum('grand_total_amount');

        return $thisMonthSaleData;
    }

    public function __remove_cache($key)
    {
        $key == 'nothing' && $key = '';
        Cache::forget('totalsale' . $key . 'chart');
        Cache::forget('topfive');
        Cache::forget('orders' . $key == '' ? 1 : $key);
        flash(localize('Cache Has Been Removed.'))->success();

        return redirect(route('admin.dashboard'));
    }
}
