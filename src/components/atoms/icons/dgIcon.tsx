import { IconController } from "./iconController";

interface IDgIcon {
  icon: string;
  colour?: string;
  size?: number;
  styles?: string;
}

const DgIcon = ({ icon, colour, size, styles }: IDgIcon): JSX.Element => {
  // Extract utilities to determine variant and style into separate function(s)
  const { IconComponent, containerSize } = IconController(icon, size);

  return (
    <div role={icon} className={`${containerSize} inline-block ${styles}`}>
      <IconComponent colour={colour} />
    </div>
  );
};

export default DgIcon;
