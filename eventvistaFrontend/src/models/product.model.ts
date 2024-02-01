import product_service from "@/services/product.service"
import { useQuery } from "react-query"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { set_carts_qty } from "@/redux/features/global-slice";



