import { Category } from '../styled/Category.styled';
import { Table, TBody, Th, Thead, Tr, Td } from '../styled/Table.styled';
import { FaTrashAlt, FaMinusCircle } from 'react-icons/fa';

interface tableProps{
    description : string;
    price : number;
    category : string;
    date : string;
}

export const TableDefault = ({description, price, category, date} : tableProps) => {
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
                            {description}
                        </Td>
                        <Td>
                            ${price}
                        </Td>
                        <Td>
                            <Category text={category} color="white" bgcolor="black" />
                        </Td>
                        <Td>
                            {date}
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