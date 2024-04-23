import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../03-examples/MultipleCustomHooks";


describe('Pruebas en <MultipleCustomHooks />', () => {
    test('debe de mostrar el componente por defecto', () => { 

        //*renderizamos el componente
        render(<MultipleCustomHooks />)

        //screen.debug();

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText('Información de Pokemon'))

        const nextButton = screen.getByRole('button', {name: 'Siguiente Pokemon'})
        const afterButton = screen.getByRole('button', {name: 'Anterior Pokemon'})
        expect(nextButton.disabled).toBeTruthy() //debe ser true
        //*para ver el contenido del componente en HTML, es como un console.log

     })
});