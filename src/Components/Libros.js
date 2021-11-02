import React from 'react'
import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext} from 'react';
import { LibreriaContext } from './LibreriaContext';


export default function Libros () {
        const {catalogo, agregar} = useContext(LibreriaContext);
        return (
            <div className="Tabla_Libros">
                <h4 style={{marginBottom:'5vmin' }}>Libros</h4>
                  {
                    <Table>
                    <thead>
                      <tr>
                        <th>Codigo</th>
                        <th>Titulo</th>
                        <th>Idioma</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        catalogo.map((bok,i)=>{
                        
                        return(<tr key={i}>
                          <td>{bok.codigo}</td>
                          <td>{bok.titulo}</td>
                          <td>{bok.idioma}</td>
                          <td>{<Button variant="dark" disabled={bok.desactivado} onClick={()=>agregar(bok)}>Añadir</Button>}</td>
                          </tr>)


                        })
                      }
                      

                    </tbody>
                    </Table>
                   
                  }
 
            </div>
        )

}
 

