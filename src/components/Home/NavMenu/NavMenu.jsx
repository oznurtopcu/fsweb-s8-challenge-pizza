import './NavMenu.css';

export default function NavMenu(props) {
    const {menuList} = props;
    return(
        <nav>
            {menuList.map((item,index) => {
                return <a href="#"><img src={`../../../../images/iteration-2-images/icons/${index+1}.svg`}  alt={item} />{item}</a>
            })}
        </nav>
    );
}