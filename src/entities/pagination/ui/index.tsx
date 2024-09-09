export function Pagination({
  total,
  limit = 8,
  skip = 0,
}: {
  total: number;
  limit?: number;
  skip: number;
}) {
  const list: number[] = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    list.push(i);
  }
  console.log(skip);
  return (
    <div>
      {list.map((btn) => (
        <p key={btn}>{btn}</p>
      ))}
    </div>
  );
}
