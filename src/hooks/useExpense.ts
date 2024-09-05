import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import toast from 'react-hot-toast';

export function useGetExpense() {
  const [loading, setLoading] = useState(true);
  const [expense, setExpense] = useState([]);
  const { isAuthenticated } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExpense = async () => {
      setLoading(true);
      setError(null);
      if (isAuthenticated) {
        try {
          const token = localStorage.getItem('token');
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

          const response = await fetch('/expense/all', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });

          if (!response.ok) {
            const errorText = await response.text();
            console.error("Error en la respuesta: ", errorText);
            setError(`Network response was not ok: ${response.statusText}`);
            toast.error(`Error en la respuesta: ${errorText}`);
            return;
          }

          const data = await response.json();
          setExpense(data);

        } catch (error) {
          console.error("Error al intentar obtener los gastos", error);
          setError("Error al obtener los gastos");
          toast.error("Error al obtener los gastos");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchExpense();
  }, [isAuthenticated]);

  return { expense, loading, error };
}

export function useAddExpense() {
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    price: '',
    date: '',
    description: '',
    category: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
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
        toast.error("No se encontró el token en localStorage");
        return;
      }

      const response = await fetch('/expense/new', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        toast.error(`Error: ${errorText}`);
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      toast.success("Gasto agregado exitosamente");
      setFormData({ price: '', date: '', description: '', category: '' });
      setModalOpen(false);
    } catch (error) {
      console.error("Error al intentar agregar el gasto", error);
      toast.error("Error al agregar el gasto");
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
