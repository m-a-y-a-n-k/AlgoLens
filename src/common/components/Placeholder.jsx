import { Skeleton } from "@material-ui/lab"

export default function Placeholder({ variant = "rect", width, height }) {
  return <Skeleton variant={variant} width={width} height={height} />
}
