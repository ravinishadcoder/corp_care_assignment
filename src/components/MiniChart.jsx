import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import styles from "../styles/miniChart.module.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const data = [
  { name: "Nov 1", amount: 30 },
  { name: "Nov 4", amount: 20 },
  { name: "Nov 8", amount: 40 },
  { name: "Nov 12", amount: 30 },
  { name: "Nov 16", amount: 40 },
];

const MiniChart = () => {
  return (
    <Box className={styles.MiniChartBox}>
      <Stack >
        <Text color="gray.400">
            Accounts reached
        </Text>
        <Text
        className={styles.miniHeading}
        >11,756</Text>
        <HStack className={styles.sortDay}>
            <Text>Day</Text>
            <Text>Week</Text>
            <Text color="black">Month</Text>
            <Text>Year</Text>
        </HStack>
      </Stack>
      <AreaChart
        width={500}
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
        <YAxis hide={true} />

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

export default MiniChart;
