export type MenuItemTitleType = {
  title : string;
  subtitle?: string;
} 

const MenuItemTitle = ({title,subtitle} : MenuItemTitleType) =>{

    return(
        <span className="ms-1">
            {title}  {subtitle}
        </span>
    );
}

export default MenuItemTitle;
