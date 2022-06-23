import ProfilBanner from "./profilHeader";

const ProfilLayout = ({ children }) => {
    return ( 
        <div>
            <ProfilBanner/>
            { children }
        </div>
     );
}
export default ProfilBanner;