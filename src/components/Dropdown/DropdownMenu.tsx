import Styles from "@/components/Dropdown/DropdownMenu.module.css";
interface DropdownLink {
  label: string;
  href: string;
}
interface DropdownProps {
  name: string;
  linkArray?: DropdownLink[];
}

const DropdownMenu = ({ name, linkArray = [] }: DropdownProps) => {
  return (
    <div className={Styles.dropDown}>
      <button className={Styles.dropBtn}>{name}</button>
      <div className={Styles.dropContent}>
        {linkArray.map((item) => {
          return (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownMenu;
