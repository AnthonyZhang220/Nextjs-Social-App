import styles from "./Dropdown.module.scss";

type DropdownProps = {
	children: JSX.Element;
};

function Dropdown(props: DropdownProps) {
	return <div className={styles.dropdown}>{props.children}</div>;
}

export default Dropdown;
