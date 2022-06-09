import {ChangeEvent, MouseEvent} from "react";

export {}


{/*const callback = () => {
    alert('hey')
    return 12
}

window.setTimeout( callback, 1000);*/}


export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget)


        //alert('user have been deleted')

    }

    const saveUser = () => {
        alert('user have been saved')

    }

    const onNameChanged=()=> {
        console.log("name changed")
    }

    const onAgeChanged=(event: ChangeEvent<HTMLInputElement>)=> {
        console.log("age changed: "+ event.currentTarget.value)
    }

    const focusLostHandler=()=> {
        console.log("focus lost")
    }


    return (
        <div>
            <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Dimych</textarea>

            <input onChange={onAgeChanged} type={"number"}/>

            <button name="delete" tabIndex={2} onClick={deleteUser}>delete</button>



            <button name="delete" tabIndex={6} onClick={deleteUser}>save</button>
        </div>
    )
}