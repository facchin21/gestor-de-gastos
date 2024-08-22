import { Category } from "../styled/Category.styled";
import { Table, TBody, Th, Thead, Tr, Td } from '../styled/Table.styled';
import { FaTrashAlt, FaMinusCircle } from 'react-icons/fa';

export const TableDefault = () => {
    return(
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
                    <Tr>
                        <Td>
                            Chocolate
                        </Td>
                        <Td>
                            $1365
                        </Td>
                        <Td>
                            <Category text={'kiosco'} color="#11e2" bgColor="black"/>
                        </Td>
                        <Td>
                            21-11-2001
                        </Td>
                        <Td>
                            <div className="flex gap-2 items-center justify-center">
                                <FaTrashAlt 
                                    style={{ cursor: 'pointer',
                                        color: 'black',
                                        fontSize: '20px' }} />
                                <FaMinusCircle
                                    style={{cursor : 'pointer',
                                        color : 'black',
                                        fontSize: '20px'}}/>
                            </div>
                        </Td>
                    </Tr>
                </TBody>
            </Table>
    )
}