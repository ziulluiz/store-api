import fiservLogo from "../../assets/fiserv_logo_orange_rgb.jpg";
import './header.css';

export const Header = () => {
    return(
        <header>
      <div className=" header_container">
        <div className="logo_container">
          <img src= {fiservLogo} alt="me" className='fiserv_logo'/>
        </div>
      </div>
    </header>
    )

}