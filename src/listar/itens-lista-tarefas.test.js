import React  from 'react';
import ReactDOM from 'react-dom';
import ItensLIstaTarefas from './itens-lista-tarefas';
import Tarefa from '../models/tarefa.model';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('Teste do componente que exibe um item da listagem de tarefas', () => {

    const nomeTarefa = 'Tarefa';
    

    it('deve renderizar o component sem erros', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <ItensLIstaTarefas tarefas={[]} recarregarTarefas={() =>false}  />, div
        );


        ReactDOM.unmountComponentAtNode(div);
    });
});


