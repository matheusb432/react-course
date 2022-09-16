import './ChartBar.css';

interface ChartBarProps {
  value: number;
  maxValue: number | null;
  label: string;
}

const ChartBar = ({ value, maxValue, label }: ChartBarProps) => {
  let barFillHeight = '0%';

  if (maxValue != null && maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
