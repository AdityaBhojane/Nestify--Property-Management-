"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import React, { useEffect, useState } from "react"

// const chartData = [
//   { month: "January", desktop: 186, mobile: 80 },
//   { month: "February", desktop: 305, mobile: 200 },
//   { month: "March", desktop: 237, mobile: 120 },
//   { month: "April", desktop: 73, mobile: 190 },
//   { month: "May", desktop: 209, mobile: 130 },
//   { month: "June", desktop: 214, mobile: 140 },
// ]

// const chartData = 

const chartConfig = {
  rent: {
    label: "Rent",
    color: "hsl(var(--chart-1))",
  },
  sale: {
    label: "Sale",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

interface ChartsProps {
  rent?: number;
  sale?: number;
  type?: string;
}

interface ChartsProps {
  priceRanges: ChartsProps[];
}
export const Chart:React.FC<ChartsProps> = ({priceRanges})=> {


  console.log(priceRanges);

  const [chartData, setChartData] = useState([
    { type: "", rent: 30, sale: 10 },
    { type: "", rent: 20, sale: 0},
    { type: "", rent: 30, sale: 10 },
    { type: "", rent: 70, sale: 30 },
    { type: "", rent: 30, sale: 60 },
    { type: "", rent: 40, sale: 40 },
  ])

  useEffect(() => {
    if (priceRanges && priceRanges.length > 0) {
      const newChartData = priceRanges.map((range) => ({
        type: String(range.type), 
        rent: range.rent || 0,
        sale: range.sale || 0,
      }));

      setChartData(newChartData);
    }
  }, [priceRanges]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Properties Types & Price Range </CardTitle>
        <CardDescription>
          Showing total rants/sales with price range
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="type"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}  
              padding={{ left: 15, right: 15 }} 
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillRent" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-rent)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-rent)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillSale" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-sale)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-sale)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="sale"
              type="natural"
              fill="url(#fillSale)"
              fillOpacity={0.4}
              stroke="var(--color-sale)"
              stackId="a"
            />
            <Area
              dataKey="rent"
              type="natural"
              fill="url(#fillRent)"
              fillOpacity={0.4}
              stroke="var(--color-rent)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
             $50K - $500K +
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
