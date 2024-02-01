import React, { Dispatch, SetStateAction, useState } from 'react';
import { DatePicker, Radio, Space } from 'antd';
import dayjs from 'dayjs';
import { EventFilterSliceT, EventSidebarT } from '@/types_and_interfaces/types';


const DateRangePicker: React.FC<{ side_bar_data: EventSidebarT, set_filter: Dispatch<SetStateAction<EventFilterSliceT>> }> = ({ side_bar_data, set_filter }) => {

    // const disabledDate = (current: dayjs.Dayjs) => {
    //     // Disable dates before today
    //     return current && current < dayjs().startOf('day')
    // };

    const getPredefinedDateRange = (option: string): [dayjs.Dayjs, dayjs.Dayjs] => {
        const today = dayjs().startOf('day')

        switch (option) {
            case 'today':
                return [today, today];
            case 'tomorrow':
                return [today.add(1, 'day'), today.add(1, 'day')];
            case 'nextWeekend':
                return [
                    today.add((6 - today.day() + 7) % 7 + 1, 'day'),
                    today.add((6 - today.day() + 7) % 7 + 2, 'day'),
                ];
            case 'next3Months':
                return [today, today.add(3, 'month')];
            case 'next30Days':
                return [today, today.add(30, 'day')];
            case 'next6Months':
                return [today, today.add(6, 'month')];
            case 'next7Days':
                return [today, today.add(7, 'day')];
            default:
                return [today, today];
        }
    };

    const handlePredefinedDateRangeSelect = (option: string) => {
        const [startDate, endDate] = getPredefinedDateRange(option)
        set_filter((prev) => ({
            ...prev,
            from_date: startDate.format("YYYY-MM-DD"),
            to_date: endDate.format("YYYY-MM-DD")
        }))
    };

    return (
        <div>
            <Space direction="vertical">
                <Radio.Group >
                    <Radio className='d-flex gap-2 p-default p-round p-smooth w-100 filter-radio' value="today" onChange={() => handlePredefinedDateRangeSelect('today')}>
                        Today
                    </Radio>
                    <Radio className='d-flex gap-2 p-default p-round p-smooth w-100 filter-radio' value="tomorrow" onChange={() => handlePredefinedDateRangeSelect('tomorrow')}>
                        Tomorrow
                    </Radio>
                    <Radio className='d-flex gap-2 p-default p-round p-smooth w-100 filter-radio' value="nextWeekend" onChange={() => handlePredefinedDateRangeSelect('nextWeekend')}>
                        Next Weekend
                    </Radio>
                    <Radio className='d-flex gap-2 p-default p-round p-smooth w-100 filter-radio' value="next3Months" onChange={() => handlePredefinedDateRangeSelect('next3Months')}>
                        Next 3 Months
                    </Radio>
                    <Radio className='d-flex gap-2 p-default p-round p-smooth w-100 filter-radio' value="next30Days" onChange={() => handlePredefinedDateRangeSelect('next30Days')}>
                        Next 30 Days
                    </Radio>
                    <Radio className='d-flex gap-2 p-default p-round p-smooth w-100 filter-radio' value="next6Months" onChange={() => handlePredefinedDateRangeSelect('next6Months')}>
                        Next 6 Months
                    </Radio>
                    <Radio className='d-flex gap-2 p-default p-round p-smooth w-100 filter-radio' value="next7Days" onChange={() => handlePredefinedDateRangeSelect('next7Days')}>
                        Next 7 Days
                    </Radio>

                </Radio.Group>

            </Space>
        </div>
    )
}

export default DateRangePicker;
