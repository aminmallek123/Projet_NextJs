"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"
export default function index() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/movie').then((res) => {
      setMovie(res.data);
    })
  });
  return (
    <>
      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Bienvenu sur Netiflixy</h1>
            <p class="lead fw-normal text-white-50 mb-0">Regarder les meilleurs film</p>
          </div>
        </div>
      </header>
      <section class="bg-dark py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {movie?.map((movies) => (
              <div class="col mb-5">
                <div class="card h-100">
                  <img class="card-img-top" src={`${movies.Image}`} />
                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">{movies.title}</h5>
                      <p>{movies.date_creation}</p>
                    </div>
                  </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btn btn-outline-dark mt-auto"
                      href={`/${movies?._id}`}>voir</a></div>
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
