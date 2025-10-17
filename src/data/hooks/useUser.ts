// will have all hooks related to user api endpoint's call using tanstack query
// the component will use the functions provided by this set of file's.

import { useQuery } from "@tanstack/react-query";

import { fetchAllUser } from "../services/userService";


export function useFetchUsers(){
    return useQuery({
        queryKey:["users"],
        queryFn:fetchAllUser,
        staleTime:1000*60*5,
    })
}