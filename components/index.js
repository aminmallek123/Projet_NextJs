import React from "react";
const Acceuil = (props) => {
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
    return (<>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Bienvenu sur Netiflixy</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Regarder les meilleurs film</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {categories?.map((categorie) => (
                        <div class="col mb-5">
                            <div class="card h-100">
                                <div class="card-body p-4">
                                    <div class="text-center">
                                        <h5 class="fw-bolder">{categorie.title}</h5>
                                        <p>{categorie.date_creation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
    )
}
export default Acceuil;