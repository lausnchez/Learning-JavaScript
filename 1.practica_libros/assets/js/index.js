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
                        <p>Título: ${Libro.name}</p>
                        <p>Autor: ${Libro.autor}</p>
                        <p>Descripción:${Libro.descripcion}</p>
                        <p>Categoría: ${Libro.categoria}</p>
                    </div>
                    <button>X</button>`;
    nuevoLibro.innerHTML = contenido;
    book_container.appendChild(nuevoLibro);
}

nuevoLibro({"name":"Prueba", "autor": "Prueba autor", "descripcion":"Prueba de descripcion", "categoria": "Novela", "imagen": "assets/images/book_placeholder.jpg"});