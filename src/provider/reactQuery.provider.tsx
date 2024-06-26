"use client"
import { ReactNode} from "react";
import {QueryClientProvider} from "react-query";
import { queryClient } from '../lib/queryClient.ts';

export default function ReactQueryProvider({children}:{children:ReactNode}) {
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}