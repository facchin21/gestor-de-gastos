import { formatDate } from "../../utils/dateUtils";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";
import { ContainerForm, Input, Label } from "../../styled/Froms.styled";
import { Buttons } from '../../styled/Button.styled';
import { ButtonSeccion } from "../../styled/ButtonSeccion";
import toast, { Toaster } from "react-hot-toast";


export const EditPassword = () => {
    const { user } = useUser();
    const fullName = `${user?.message.name} ${user?.message.lastname}`;
    const formattedDate = formatDate(user?.message.createdAt);
    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        setShowModal(!showModal)
    }
    return (
        <header className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-semibold">Nombre Completo: <span className="capitalize font-normal">{fullName}</span></h2>
            <h3 className="text-xl font-semibold">Fecha de Creacion: <span className="capitalize font-normal">{formattedDate}</span></h3>
            <Buttons className="my-6" onClick={handleModal}>
                Editar contraseña
            </Buttons>
            {showModal && (
                <ModalPassword />
            )}
        </header>
    )
}

export const ModalPassword = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClick = async () => {
        if (newPassword !== confirmPassword) {
            toast.error("Las contraseñas no coinciden");
            return;
        }
    
        try {
            const response = await fetch('/user/editpassword', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    password: currentPassword,         
                    newPassword,                       
                    confirmNewPassword: confirmPassword 
                }),
            });
    
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
    
            toast.success("Contraseña modificada exitosamente");
        } catch (error) {
            console.error("Error al modificar Password: ", error);
            toast.error("Error al modificar password");
        }
    }

    return (
        <div className="bg-secondary rounded-3xl px-24 py-24 flex flex-col items-center justify-center">
            <ContainerForm>
                <Label>Contraseña Actual:</Label>
                <Input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
            </ContainerForm>
            <ContainerForm>
                <Label>Contraseña Nueva:</Label>
                <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />

                <Label>Confirmar contraseña:</Label>
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </ContainerForm>
            <ButtonSeccion onClick={handleClick}>
                Confirmar
            </ButtonSeccion>

            <Toaster />
        </div>
    )
}
