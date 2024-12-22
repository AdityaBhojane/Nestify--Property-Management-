"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

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
import { useEffect, useState } from "react"




const chartConfig = {
  Types: {
    label: "Types",
  },
  villa: {
    label: "Villa",
    color: "hsl(var(--chart-1))",
  },
  Office: {
    label: "Office",
    color: "hsl(var(--chart-2))",
  },
  Shops: {
    label: "Shops",
    color: "hsl(var(--chart-3))",
  },
  Plot: {
    label: "Plot",
    color: "hsl(var(--chart-4))",
  },
  apartments: {
    label: "Apart...",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

type Statistic = { id?: string; count?: number };

export function BarChartMix({statistic}:{statistic:Statistic[]}) {

  const [chartData, setChartData] = useState([
    { property: "apartments", Types: 0, fill: "var(--color-apartments)" },
    { property: "villa", Types: 0, fill: "var(--color-villa)" },
    { property: "Office", Types: 0, fill: "var(--color-Office)" },
    { property: "Shops", Types: 0, fill: "var(--color-Shops)" },
    { property: "Plot", Types: 0, fill: "var(--color-Plot)" },
  ]);


  useEffect(() => { 
    if(statistic && statistic.length > 0) { 
      const newChartData = [ 
        { property: 'apartments', Types: statistic[0]?.count || 0, fill: 'var(--color-apartments)' }, 
        { property: 'villa', Types: statistic[1]?.count || 0, fill: 'var(--color-villa)' }, 
        { property: 'Office', Types: statistic[2]?.count || 0, fill: 'var(--color-Office)' }, 
        { property: 'Shops', Types: statistic[3]?.count || 0, fill: 'var(--color-Shops)' }, 
        { property: 'Plot', Types: statistic[4]?.count || 0, fill: 'var(--color-Plot)' }, 
      ]; 
      setChartData(newChartData); 
    } 
  }, [statistic]);


  return (
    <Card>
      <CardHeader>
        <CardTitle>Property Types Available</CardTitle>
        <CardDescription>All price range</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 0,
            }}
          >
            <YAxis
              dataKey="property"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis dataKey="Types" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Types" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
