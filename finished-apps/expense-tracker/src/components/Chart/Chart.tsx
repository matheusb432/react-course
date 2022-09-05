import { DataPoint } from '../../types';
import './Chart.css';
import ChartBar from './ChartBar';

interface ChartProps {
  dataPoints: DataPoint[];
}

const Chart = ({ dataPoints }: ChartProps) => {
  const maxValue = Math.max(...dataPoints.map((x) => x.value));

  return (
    <div className="chart">
      {dataPoints.map((x) => (
        <ChartBar
          key={x.label}
          maxValue={maxValue}
          value={x.value}
          label={x.label}
        />
      ))}
    </div>
  );
};

export default Chart;
