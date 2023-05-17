import { ReactNode, Suspense } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const SuspenseComponent = ({ children }: Props) => {
  return <Suspense fallback={<div />}>{children}</Suspense>;
};

export default SuspenseComponent;
