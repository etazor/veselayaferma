export function Card({ children, className='' }) {
  return <div className={`bg-white rounded shadow p-3 ${className}`}>{children}</div>;
}
export function CardHeader({ children }) { return <div className='mb-2 font-bold'>{children}</div>; }
export function CardContent({ children }) { return <div>{children}</div>; }
export function CardTitle({ children }) { return <h2>{children}</h2>; }
