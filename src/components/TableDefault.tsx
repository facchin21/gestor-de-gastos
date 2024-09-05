import { Category } from '../styled/Category.styled';
import { Table, TBody, Th, Thead, Tr, Td } from '../styled/Table.styled';
import { FaPencilAlt, FaMinusCircle } from 'react-icons/fa';

interface TableProps {
    expenses: {
        description: string;
        price: number;
        category: string;
        date: string;
    }[];
}

export const TableDefault = ({ expenses }: TableProps) => {
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Descripcion</Th>
                    <Th>Precio</Th>
                    <Th>Categoria</Th>
                    <Th>Fecha</Th>
                    <Th>Acciones</Th>
                </Tr>
            </Thead>
            <TBody>
                {expenses?.length > 0 ? (
                    expenses.map((expense, index) => (
                        <Tr key={index}>
                            <Td>{expense.description}</Td>
                            <Td>${expense.price}</Td>
                            <Td>
                                <Category text={expense.category} color="white" bgcolor="black" />
                            </Td>
                            <Td>{expense.date}</Td>
                            <Td>
                                <div className="flex gap-2 items-center justify-center">
                                    <FaPencilAlt
                                        style={{
                                            cursor: 'pointer',
                                            color: 'black',
                                            fontSize: '20px'
                                        }}
                                    />
                                    <FaMinusCircle
                                        style={{
                                            cursor: 'pointer',
                                            color: 'black',
                                            fontSize: '20px'
                                        }}
                                    />
                                </div>
                            </Td>
                        </Tr>
                    ))
                ) : (
                    <Tr>
                        <Td colSpan={5} style={{textAlign : "center", fontFamily : "Inter", fontSize: "16px"}}>No hay gastos cargados!</Td>
                    </Tr>
                )}
            </TBody>
        </Table>
    );
};