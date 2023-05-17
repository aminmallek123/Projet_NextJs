"use client"
import React, { useState, useEffect } from "react"
import axios from "axios"
import Delet from "@/components/Delete";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
export default function Home() {
  const [note, setNote] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/api/note').then((res) => {
      setNote(res.data);
    })
  });
  const { data } = useSession();
  return (<>
    <SessionProvider>
      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {note?.map((note) => (
              <div class="col mb-5">
                <div class="card h-100">
                  <div class="card-body p-4">
                    <div class="text-center">
                      <h5 class="fw-bolder">{note.title}</h5>
                      <p>{note.description}</p>
                    </div>
                  </div>
                  <h1>{data?.user?.email}</h1>
                  <Delet noteId={note._id} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SessionProvider>
  </>)
}
