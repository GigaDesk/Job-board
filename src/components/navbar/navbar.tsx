import MenuIcon from "@mui/icons-material/Menu";

export interface NavbarProps {
  onClickMenu?: any;
}

export default function NavBar(props: NavbarProps) {
  return (
    <div className="grid justify-items-start p-4 border">
      <button onClick={props.onClickMenu}>
        <MenuIcon sx={{ color: "#1C2B33" }} />
      </button>
    </div>
  );
}
