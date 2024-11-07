import { RenderLogProps } from './props';

export function RenderLog({ label, children }: RenderLogProps) {
  console.log(`RenderLog - ${label} - ${new Date()}`);

  return (
    <>
      {children}
    </>
  );
}
