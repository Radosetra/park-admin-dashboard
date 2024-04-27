"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"

import { cn } from "./../../../@/lib/utils"
import { Button } from "./../../../@/components/ui/button"
import { Calendar } from "./../../../@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./../../../@/components/ui/popover"

import { dateRangeDto } from "@/src/_type/dateRange.dto"

interface DatePickerProps {
  start_date?: string,
  end_date?: string,
  setDateRange: (param: dateRangeDto) => void
}

export function DatePickerWithRange(props: DatePickerProps) {
  const {start_date, end_date, setDateRange} = props;
  const [date, setDate] = React.useState<DateRange | undefined>()

  React.useEffect(()=>{
    if(start_date !== undefined && end_date !== undefined){
      setDate({
        from: new Date(start_date),
        to: new Date(end_date),
      })
    }
  },[start_date, end_date])

  React.useEffect(()=>{
    if(date?.from !== undefined && date?.to !== undefined ){
      setDateRange({
      start_date: format(date.from, "y-MM-dd"),
      end_date: format(date.to, "y-MM-dd")
    })
    }
  }, [date?.from, date?.to])

  // React.useEffect(()=>{
  //   console.log("Date picker props start", start_date,"Date picker props end", end_date);
    
  //   console.log("Date Picker :Start date", date?.from);
  //   console.log("Date Picker :End date", date?.to);
  // }, [])

  return (
    <div className={cn("grid gap-2 w-full")}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-full h-[3rem] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "y-MM-dd")} -{" "}
                  {format(date.to, "y-MM-dd")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
