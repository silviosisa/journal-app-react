import React from 'react';
import {NotesAppBar} from "./NotesAppBar";

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                />

                <textarea
                    placeholder="What happended today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://images.unsplash.com/photo-1446569971295-057569541991?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1381&q=80"
                        alt="beach"/>
                </div>
            </div>
        </div>
    );
};