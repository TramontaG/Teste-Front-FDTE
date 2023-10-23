export const ForEach = <Data extends any>({
  data,
  render,
}: {
  data: Data[];
  render: (data: Data) => React.ReactNode;
}) => {
  return data.map(render);
};
