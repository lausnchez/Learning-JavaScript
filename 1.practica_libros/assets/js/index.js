const add_button = document.getElementById("add_button");

const input_name = document.getElementById("titulo_input");
const input_autor = document.getElementById("autor_input");
const input_description = document.getElementById("description_input");
const input_categoria = document.getElementById("categoria_select");
const input_imagen = document.getElementById("imagen_input");

const book_container = document.getElementById("book_list");


function nuevoLibro(Libro){

    let nuevoLibro = document.createElement("div");
    nuevoLibro.classList.add("unique_book_data");
    let contenido = `<img src="${Libro.imagen}" alt="Book cover">
                    <div>
                        <p><b>Título:</b> ${Libro.name}</p>
                        <p><b>Autor:</b> ${Libro.autor}</p>
                        <p><b>Descripción:</b>${Libro.descripcion}</p>
                        <p><b>Categoría:</b> ${Libro.categoria}</p>
                    </div>
                    <button class="btn_borrar">X</button>`;
    nuevoLibro.innerHTML = contenido;
    nuevoLibro.setAttribute("id_libro", Libro.book_id);

    const btn_borrar = nuevoLibro.querySelector(".btn_borrar");
    btn_borrar.addEventListener("click", (e) =>{
        borrarLibro(e.target, "375")
    });

    book_container.appendChild(nuevoLibro);
}

function borrarLibro(close_button){
    // Conseguir el padre

}


nuevoLibro({"name":"Prueba", "autor": "Prueba autor", "descripcion":"Prueba de descripcion", "categoria": "Novela", "imagen": "assets/images/book_placeholder.jpg", "book_id": "374"});
