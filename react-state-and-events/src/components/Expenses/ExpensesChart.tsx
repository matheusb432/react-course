import { DataPoint, Expense } from '../../types';
import Chart from '../Chart/Chart';

interface ExpensesChartProps {
  expenses: Expense[];
}

const ExpensesChart = ({ expenses }: ExpensesChartProps) => {
  const chartDataPoints: DataPoint[] = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of expenses) {
    const monthIndex = expense.date.getMonth();

    chartDataPoints[monthIndex].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
