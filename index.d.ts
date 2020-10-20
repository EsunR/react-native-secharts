export const Echarts: React.FC<{
  option: echarts.EChartOption;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  renderLoading?: () => React.ReactElement;
  onPress?: (e: any) => void;
}>;

export const echarts: any;
