import React from "react";
export default function Delet({noteId}) {
    const deleteNote = async () => {
        try {
            const deleted = await fetch(`http://localhost:3001/api/note/${noteId}`, {
                method: "Delete"
            });

            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><button class="btn btn-outline-danger mt-auto" onClick={deleteNote}>Supp</button></div>
        </div>
    )
}