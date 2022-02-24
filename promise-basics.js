'use strict';

function fetchAll() {
    return fetch(url)
        .then(res => res.json())
            .then(data => {
                console.log(data);
                })
        .catch(err => console.log(err));
}

function fetchOne(elementID) {
    return fetch(url)
        .then(res => res.json())
        .then(elements => {
            for (let element of elements) {
                if (element.id === elementID) {
                    return element;
                }
            }
        })
        .catch(err => console.log(err));
}

function editSomething(elementID) {
    let updateMovie = {
        id: elementID,
    }
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateMovie)
    }
    //This is to refresh the document or array after updating.
    fetch(url + "/" + elementID, options)
        .then(data => {
            fetchAll();
        })
}

function deleteSomething(elementID) {
    let areYouSure = confirm("Are you sure you want to delete this?");
    if (areYouSure) {
        fetch(url + "/" + elementID, {
            method: "DELETE"
        })
        .then(data => {
            fetchAll();
        })
    }
}