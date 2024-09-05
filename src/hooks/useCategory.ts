import { useEffect, useState } from "react";
import { useAuth } from './useAuth';
import toast from "react-hot-toast";

export function useGetCategory() {
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);
    const { isAuthenticated } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const [noCategories, setNoCategories] = useState<boolean>(false);

    useEffect(() => {
        const fetchCategory = async () => {
            setLoading(true);
            setError(null);
            setNoCategories(false); // Resetea el estado noCategories
            if (isAuthenticated) {
                try {
                    const token = localStorage.getItem("token");
                    if (!token) {
                        console.error("No se encontró el token en localStorage");
                        setError("No se encontró el token");
                        toast.error("No se encontró el token en localStorage");
                        return;
                    }

                    if (!/^Bearer\s[\w-]+\.[\w-]+\.[\w-]+$/.test(token)) {
                        console.error('El token no está en el formato correcto');
                        setError('Token inválido');
                        toast.error('Token inválido');
                        return;
                    }

                    const response = await fetch('/category/all', {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    if (response.status === 404) {
                        const errorText = await response.text();
                        console.log("No se encontraron categorías: ", errorText);
                        setNoCategories(true); // Marca que no hay categorías
                        setCategory([]); // Asegura que el estado de categorías esté vacío
                    } else if (!response.ok) {
                        const errorText = await response.text();
                        console.error("Error en la respuesta: ", errorText);
                        setError(`Network response was not ok: ${response.statusText}`);
                        toast.error(`Error en la respuesta: ${errorText}`);
                    } else {
                        const data = await response.json();
                        setCategory(data.message); // Asegúrate de ajustar esto según la estructura real de la respuesta
                    }
                } catch (error) {
                    console.error("Error al obtener las categorías:", error);
                    setError("Error al obtener las categorías");
                    toast.error("Error al obtener las categorías. Verifique la consola para más detalles.");
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchCategory();
    }, [isAuthenticated]);

    return { category, loading, error, noCategories };
}


export function useAddCategory() {
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        color: '',
        emoji: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("Token no encontrado en localStorage");
            }

            const response = await fetch('/category/new', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error en la respuesta: ${errorText}`);
            }

            toast.success("Categoría agregada exitosamente!");
            setFormData({ name: '', color: '', emoji: '' });
            setModalOpen(false);
        } catch (error) {
            console.error("Error al intentar agregar la categoría:", error);
            toast.error("Error al agregar la categoría");
        } finally {
            setLoading(false);
        }
    };

    return {
        modalOpen,
        setModalOpen,
        formData,
        handleChange,
        handleSubmit,
        loading
    };
}

