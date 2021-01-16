import React, {useEffect, useRef} from 'react';
import {NotesAppBar} from "./NotesAppBar";
import {useSelector} from "react-redux";
import {useForm} from "../../hooks/useForm";

export const NoteScreen = () => {

    const { active:note } = useSelector(state => state.notes);
    const [formValues, handleInputChange, reset] = useForm(note);
    const { body, title} = formValues;

    const activeId = useRef( note.id);

    useEffect(() => {
        if(activeId !== activeId.current){
            reset(note);
            activeId.current = note.id
        }

    }, [reset,note]);


    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    value={ title }
                    onChange={ handleInputChange}
                />

                <textarea
                    placeholder="What happended today"
                    className="notes__textarea"
                    value={ body }
                    onChange={ handleInputChange}
                ></textarea>

                <div className="notes__image">
                    {
                        (note.url) &&
                        <img
                            src="https://images.unsplash.com/photo-1446569971295-057569541991?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1381&q=80"
                            alt="beach"/>
                    }
                </div>
            </div>
        </div>
    );
};