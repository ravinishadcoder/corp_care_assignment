import { Box, HStack, Text } from "@chakra-ui/react";
import styles from "../styles/income.module.css";
import { BiDownArrowAlt } from "react-icons/bi";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useState } from "react";
import { useEffect } from "react";

const Analytics = () => {
  const [data,setData]=useState([]);
  
  useEffect(()=>{
  fetch("https://mock-server-ravi.herokuapp.com/Months_data")
  .then((res)=>res.json())
  .then((d)=>setData(d))
  .catch((e)=>console.log(e))
  },[])
  return (
    <Box className={styles.AnalyticsBox}>
      <Box className={styles.btnMainBox}>
        <Box className={styles.incomeBtn}>
          Income <BiDownArrowAlt />
        </Box>
        <HStack>
          <Text>Sort by</Text>
          <Box className={styles.monthBtn}>
            Month <BiDownArrowAlt />
          </Box>
        </HStack>
      </Box>
      <AreaChart
        width={600}
        height={250}
        data={data}
        
        margin={{ top: 10, right: 60, left: 0, bottom: 0 }}
      >
        <defs >
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis  />

        <CartesianGrid strokeDasharray="0 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="amount"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
          
        />
      </AreaChart>
    </Box>
  );
};

export default Analytics;
