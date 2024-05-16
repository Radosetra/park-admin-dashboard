import {useMutation} from "react-query";
// import { queryClient } from '../lib/queryClient.ts';
import { CreateTokenProps } from "../_type/auth.dto.ts";
import { authService } from "../service/auth.service.ts";

export const useCreateToken = () => {
  return useMutation({
    mutationKey:["create_token"],
    mutationFn: (data:CreateTokenProps)=>authService.createToken(data)
  })
}