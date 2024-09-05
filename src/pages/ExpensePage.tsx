import React from 'react';
import { Title } from "../styled/Container.styled";
import imageCircle from '../assets/images/circle.png';
import { AddEditCategory, Category } from "../styled/Category.styled";
import { FaMinusCircle, FaPlusCircle, FaPencilAlt } from 'react-icons/fa';
import { Buttons } from "../styled/Button.styled";
import { TableDefault } from "../components/TableDefault";
import { ModalButton, ModalFooter, ModalBody, ModalContainer, ModalOverlay, ModalTitle, ModalHeader } from '../styled/Modal.styled';
import { useGetExpense, useAddExpense } from "../hooks/useExpense";
import { useGetCategory, useAddCategory } from "../hooks/useCategory";

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

  return (
    <div className="bg-primary">
      <header className="relative">
        <Title>Gastos</Title>
        <img src={imageCircle} alt="imagen de fondo circular" className="absolute top-6 right-56 z-10" />
      </header>
      <div className="flex items-center justify-center gap-3 py-4">
        <AddEditCategory
          icon={FaPlusCircle}
          text={'Agregar Categoría'}
          bgcolor={'#38A37F'}
          color="#E1ECC8"
          cursor="pointer"
          bgHover="#3244d3"
          onClick={() => setModalOpenCategory(true)}
        />
        <AddEditCategory
          icon={FaMinusCircle}
          text={'Eliminar Categoría'}
          bgcolor={'#FC787D'}
          color="#E1ECC8"
          cursor="pointer"
          bgHover="#FC8d2f"
        />
        <AddEditCategory
          icon={FaPencilAlt}
          text={'Editar Categoría'}
          bgcolor={'#93BEB0'}
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
            categories.map((category) => (
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
                <div>
                  <label htmlFor="price" className="block text-white">Precio:</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formDataExpense.price}
                    onChange={handleChangeExpense}
                    className="p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-white">Fecha:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formDataExpense.date}
                    onChange={handleChangeExpense}
                    className="p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-white">Descripción:</label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={formDataExpense.description}
                    onChange={handleChangeExpense}
                    className="p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-white">Categoría:</label>
                  <select
                    id="category"
                    name="category"
                    value={formDataExpense.category}
                    onChange={handleChangeExpense}
                    className="p-2 rounded"
                    required
                  >
                    <option value="">Seleccionar categoría</option>
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))
                    ) : (
                      <option value="" disabled>No hay categorías cargadas!</option>
                    )}
                  </select>
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
                <div>
                  <label htmlFor="name" className="block text-white">Nombre:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formDataCategory.name}
                    onChange={handleChangeCategory}
                    className="p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="color" className="block text-white">Color:</label>
                  <input
                    type="text"
                    id="color"
                    name="color"
                    value={formDataCategory.color}
                    onChange={handleChangeCategory}
                    className="p-2 rounded"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="emoji" className="block text-white">Emoji:</label>
                  <input
                    type="text"
                    id="emoji"
                    name="emoji"
                    value={formDataCategory.emoji}
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