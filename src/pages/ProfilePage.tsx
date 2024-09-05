import { ProfileImage } from "../components/Profile/ProfileImage";
import { EditPassword } from "../components/Profile/EditPassword";


export const ProfilePage = () => {
  return (
    <div className="bg-primary h-screen flex justify-center items-center flex-col">
      <ProfileImage />
      <EditPassword/>
    </div>
  );
};