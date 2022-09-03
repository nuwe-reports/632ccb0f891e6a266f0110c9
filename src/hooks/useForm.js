import { useEffect, useMemo, useState } from 'react';

// Clase 277 Paso 5: recibo los form Validations 
export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    // Clase 278 Paso 2: el objeto de este formvalidation es que me diga si hay un error o no, usamos el hook usestate para estar atentos a los cambios e caso de error y
    // que se vuelva a renderizar nuestra pagina
    const [ formValidation, setFormValidation ] = useState({});

    useEffect(() => {
        createValidators()
    }, [ formState ]);

    // clase 301 : Solucion para que se seleccione correctamente mi nota activa: si el inital form cambia vuelve a setearse mi formulario a su estado incial

    useEffect(() => {
        setFormState(initialForm)
    }, [ initialForm ])

    // Clase 279 Paso 1 : Barrer cada una de las propiedades de mi formValidation y ver si tiene el valor de null
    const isFormValid = useMemo(() => {

        for (const formValue of Object.keys(formValidation)) {
            if(formValidation[formValue] !== null) return false
        }

        return true;
    },[ formValidation ]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    // Clase 278 Paso 1 : esta accion la mando a disparar en un useffect
    const createValidators = () => {
            // Clase 278 Paso 3
            const formCheckedValues = {};

            // Clase 278 Paso 4: Barrer cada elemento que sea objeto de validacion y analizar cada una de sus propiedades
            for (const formField of Object.keys(formValidations)) {
                // Desestructuro la funcion y el mensaje de mi formValidations y le mando cada elemento en este caso tienen el nombre de formField
                const [fn, errorMessage ] = formValidations[formField];

                // analizir si la funcion retorna un valor booleano me alcanza para chequear si hay un error o no
                // aqui creo el displayNameValid, emailValid, passwordValid, verifico con el formstate cada campo de mi formulario (displayName, email, password ) en caso de que sea
                // valido almaceno un null, todo esta OK, caso contrario envio un mensaje de error
                formCheckedValues[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage
            }

            // Clase 278 paso 5: establecer que el objeto formcheckedvalues vaa ser el nuevo valor de mi seformvalidation
            setFormValidation( formCheckedValues )


    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid
    }
}
