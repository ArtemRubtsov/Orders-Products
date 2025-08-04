import { StaticImageData } from "next/image";

export interface Order {
  id: number;
  name: string;
  date: string;
  count: number
  amount: string
  shortDate: string
}

export interface Product {
  id: number
  name: string
  serial: string
  status: string
  img: StaticImageData
}