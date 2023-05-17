"use client";
import React from 'react';
import MUIDataTable from "mui-datatables";
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import AjoutCat from './ajoutCategories';
const affTableCategories = (props) => {
    const [categories, setCategories] = React.useState(props.categories)
    //Pour actualiser la liste
    const getCategories = async () => {
        const res = await fetch('http://localhost:3001/api/movie')
        const categories = await res.json();
        setCategories(categories)
    }
    React.useEffect(() => {
        getCategories();

    }, [categories]);
    const handleDelete = async (_id) => {
        if (window.confirm("supprimer la catégorie O/N")) {
            console.log(_id)
            const res = await (await
                fetch('http://localhost:3001/api/movie/' + _id, {
                    method: "DELETE"
                })).json();
            if (res) {
                const newCategories = categories.filter((item) => item._id !== _id);
                setCategories(newCategories);

            } else {
                console.log(res);
            }
        }
    }
    const columns = [
        {
            label: "title",
            name: "title"
        },
        {
            label: "Image",
            name: "Image",
            options: {
                customBodyRender: (rowdata) => (
                    <img
                        style={{ height: 50, width: 60, borderRadius: '10%' }}
                        src={`${rowdata}`}
                        alt=""
                    />
                )
            }
        },
        {
            label: "price",
            name: "price",
        },
        {
            name: "_id",
            label: "Actions",
            options: {
                customBodyRender: (value) => (
                    <div>
                        <span
                            onClick={() => { }}
                            style={{ cursor: 'pointer' }}
                        >
                            <NoteAltOutlinedIcon color='success' />
                        </span>
                        <span
                            onClick={(e) => handleDelete(value)}
                            style={{ cursor: 'pointer' }}
                        >
                            <DeleteForeverRoundedIcon color='error' />
                        </span>
                    </div>
                )
            }
        }
    ];
    return (
        <div style={{ maxHeight: '550px', overflowY: 'scroll' }}>
        <AjoutCat />
            {categories && categories?.length > 0 ?

                <MUIDataTable
                    title="Categories List"
                    data={categories}
                    columns={columns}
                />

                : null}
        </div>
    )
}
export default affTableCategories;