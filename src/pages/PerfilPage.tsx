import { PerfilImage } from "../components/Profile/PerfilImage";
import { EditPassword } from "../components/Profile/EditPassword";


export const Perfil = () => {
  return (
    <div className="bg-primary h-screen flex justify-center items-center flex-col">
      <PerfilImage />
      <EditPassword/>
    </div>
  );
};