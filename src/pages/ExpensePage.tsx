import { useState, useRef, useEffect } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { ModalButton, ModalFooter, ModalBody, ModalContainer, ModalOverlay, ModalTitle, ModalHeader, Input, SelectStyled } from '../styled/Modal.styled';
import { FaMinusCircle, FaPlusCircle, FaPencilAlt } from 'react-icons/fa';
import { AddEditCategory, Category } from "../styled/Category.styled";
import { useGetCategory, useAddCategory } from "../hooks/useCategory";
import { useGetExpense, useAddExpense } from "../hooks/useExpense";
import { TableDefault } from "../components/TableDefault";
import imageCircle from '../assets/images/circle.png';
import { Title } from "../styled/Container.styled";
import { Buttons } from "../styled/Button.styled";

export const ExpensePage = () => {
  const { expense: expenses } = useGetExpense();
  const { category: categories, loading: loadingCategories, error: categoryError } = useGetCategory();
  const {
    modalOpen: modalOpenExpense,
    setModalOpen: setModalOpenExpense,
    formData: formDataExpense,
    handleChange: handleChangeExpense,
    handleSubmit: handleSubmitExpense,
    loading: loadingExpense
  } = useAddExpense();

  const {
    modalOpen: modalOpenCategory,
    setModalOpen: setModalOpenCategory,
    formData: formDataCategory,
    handleChange: handleChangeCategory,
    handleSubmit: handleSubmitCategory,
    loading: loadingCategory
  } = useAddCategory();

  const [editing, setEditing] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);

  const handleEmojiSelect = (emoji: { native: string }) => {
    setEditing(false);
    handleChangeCategory({ target: { name: 'emoji', value: emoji.native } });
    setShowEmojiPicker(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (emojiButtonRef.current && !emojiButtonRef.current.contains(event.target as Node)) {
      setShowEmojiPicker(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-primary">
      <header className="relative">
        <Title>Gastos</Title>
        <img src={imageCircle} alt="imagen de fondo circular" className="absolute top-6 right-56 z-10" />
      </header>
      <div className="flex items-center justify-center gap-3 py-4">
        <AddEditCategory
          icon={FaPlusCircle}
          text="Agregar Categoría"
          bgcolor="#38A37F"
          color="#E1ECC8"
          cursor="pointer"
          bgHover="#3244d3"
          onClick={() => setModalOpenCategory(true)}
        />
        <AddEditCategory
          icon={FaMinusCircle}
          text="Eliminar Categoría"
          bgcolor="#FC787D"
          color="#E1ECC8"
          cursor="pointer"
          bgHover="#FC8d2f"
        />
        <AddEditCategory
          icon={FaPencilAlt}
          text="Editar Categoría"
          bgcolor="#93BEB0"
          color="#E1ECC8"
          cursor="pointer"
          bgHover="#96BE2e"
        />
      </div>
      <div className="py-8 flex flex-col justify-center items-center">
        <h2 className="font-Inter text-2xl font-semibold">Categorías Añadidas</h2>
        <div className="flex justify-between items-center gap-2 px-8 flex-wrap pb-3 pt-5">
          {loadingCategories ? (
            <p>Cargando categorías...</p>
          ) : categoryError ? (
            <p>Hubo un problema al cargar las categorías: {categoryError}</p>
          ) : categories.length > 0 ? (
            categories.map(category => (
              <Category
                key={category.id}
                text={category.name}
                bgcolor={category.color}
                color="white"
              />
            ))
          ) : (
            <Category
              text="No hay categorías"
              bgcolor="gray"
              color="white"
            />
          )}
        </div>
      </div>
      <main className="flex justify-center items-center flex-col px-8 py-6">
        <Buttons onClick={() => setModalOpenExpense(true)}>
          <FaPlusCircle />
          Agregar Gasto
        </Buttons>
        <div className="mt-6">
          <TableDefault expenses={expenses} />
        </div>
      </main>

      {/* Modal para Agregar Gasto */}
      {modalOpenExpense && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Agregar Gasto</ModalTitle>
              <ModalButton className="cancel" onClick={() => setModalOpenExpense(false)}>X</ModalButton>
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmitExpense}>
                <div className="py-1">
                  <label htmlFor="price" className="block text-white">Precio:</label>
                  <Input
                    type="number"
                    id="price"
                    name="price"
                    value={formDataExpense.price}
                    onChange={handleChangeExpense}
                    className="p-2 rounded"
                    required
                  />
                </div>
                <div className="py-1">
                  <label htmlFor="date" className="block text-white">Fecha:</label>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formDataExpense.date}
                    onChange={handleChangeExpense}
                    className="p-2 rounded"
                    required
                  />
                </div>
                <div className="py-1">
                  <label htmlFor="description" className="block text-white">Descripción:</label>
                  <Input
                    type="text"
                    id="description"
                    name="description"
                    value={formDataExpense.description}
                    onChange={handleChangeExpense}
                    className="p-2 rounded"
                    required
                  />
                </div>
                <div className="py-1">
                  <label htmlFor="category" className="block text-white">Categoría:</label>
                  <SelectStyled
                    id="category"
                    name="category"
                    value={formDataExpense.category}
                    onChange={handleChangeExpense}
                    className="p-2 rounded"
                    required
                  >
                    <option value="" className='text-black'>Seleccionar categoría</option>
                    {categories.length > 0 ? (
                      categories.map(category => (
                        <option key={category.id} value={category.id} className='text-black'>
                          {category.name}
                        </option>
                      ))
                    ) : (
                      <option value="" disabled>No hay categorías cargadas!</option>
                    )}
                  </SelectStyled>
                </div>
                <ModalFooter>
                  <ModalButton type="submit" className="confirm" disabled={loadingExpense}>
                    {loadingExpense ? "Cargando..." : "Agregar Gasto"}
                  </ModalButton>
                  <ModalButton className="cancel" onClick={() => setModalOpenExpense(false)}>Cancelar</ModalButton>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContainer>
        </ModalOverlay>
      )}

      {/* Modal para Agregar Categoría */}
      {modalOpenCategory && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Agregar Categoría</ModalTitle>
              <ModalButton className="cancel" onClick={() => setModalOpenCategory(false)}>X</ModalButton>
            </ModalHeader>
            <ModalBody>
              <form onSubmit={handleSubmitCategory}>
                <div className="py-1">
                  <label htmlFor="name" className="block text-primary">Nombre:</label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formDataCategory.name}
                    onChange={handleChangeCategory}
                    required
                  />
                </div>
                <div className="py-1">
                  <label htmlFor="emoji" className="block text-primary">Emoji:</label>
                  <div className="relative">
                    <button
                      type="button"
                      ref={emojiButtonRef}
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="p-2 bg-gray-200 rounded"
                    >
                      {formDataCategory.emoji || "Seleccionar emoji"}
                    </button>
                    {showEmojiPicker && (
                      <div className="absolute z-10">
                        <Picker data={data} onEmojiSelect={handleEmojiSelect} />
                      </div>
                    )}
                  </div>
                </div>
                <div className="py-1">
                  <label htmlFor="color" className="block text-primary">Color:</label>
                  <Input
                    type="color"
                    id="color"
                    name="color"
                    value={formDataCategory.color}
                    onChange={handleChangeCategory}
                    className="p-2 rounded"
                    required
                  />
                </div>
                <ModalFooter>
                  <ModalButton type="submit" className="confirm" disabled={loadingCategory}>
                    {loadingCategory ? "Cargando..." : "Agregar Categoría"}
                  </ModalButton>
                  <ModalButton className="cancel" onClick={() => setModalOpenCategory(false)}>Cancelar</ModalButton>
                </ModalFooter>
              </form>
            </ModalBody>
          </ModalContainer>
        </ModalOverlay>
      )}
    </div>
  );
};
