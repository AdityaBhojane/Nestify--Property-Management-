
import { statisticData } from "@/apis/Statistic";
// import { RootState } from "@/redux/store";
import { useQuery } from "@tanstack/react-query"
// import { useSelector } from "react-redux";


export const useStatistic = ()=>{
    // const token = useSelector((state:RootState) => state.auth.token);

    const {data:statistic, isPending, isFetching, isError, isSuccess,error} = useQuery({
        queryFn:()=> statisticData(),
        queryKey:['getStatistic'],
        staleTime:30000
    });

    return {
        statistic,
        isPending,
        isFetching,
        isError,
        isSuccess,
        error
    }
}