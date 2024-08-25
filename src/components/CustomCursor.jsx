import { useMousePosition } from "./useMousePosition";

export const CustomCursor = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      className="absolute z-[999] w-4 h-4 rounded-full bg-blue-500"
      style={{ left: x, top: y }}
    ></div>
  );
};
