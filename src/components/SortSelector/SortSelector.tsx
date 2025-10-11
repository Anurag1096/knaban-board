import Styles from "@/components/SortSelector/SortSelector.module.css";
interface SortArr {
  label: string;
  handleClick: () => void;
}
interface SortSelectorProps {
  name: string;
  sortArray?: SortArr[];
}

const SortSelector = ({ name, sortArray = [] }: SortSelectorProps) => {
  return (
    <div className={Styles.SortSelector}>
      <button className={Styles.SortBtn}>{name}</button>
      <ul className={Styles.SortContent}>
        {/* ----- Array Looping-------- */}
        {sortArray.map((item) => {
          return (
            <li key={item.label} onClick={item.handleClick}>
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SortSelector;
