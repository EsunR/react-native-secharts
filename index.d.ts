export const Echarts: React.FC<{
  option: echarts.EChartOption;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  renderLoading?: () => React.ReactElement;
  onPress?: (e: any) => void;
  notMerge?: boolean; // setOption 时是否启用 notMerge (默认 false)
  lazyUpdate?: boolean; // setOption 时是否启用 lazyUpdate (默认 false)
}>;

export const echarts: any;
